import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import admin from 'firebase-admin';

import InstagramImage from './models/InstagramImages.js';
import instagramImagesData from './instagramImagesData.js';

dotenv.config();

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH;
if (!serviceAccountPath || !fs.existsSync(serviceAccountPath)) {
    console.error('❌ Firebase service account key not found or invalid path.');
    process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/revolver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsPath = path.join(__dirname, 'assets');

mongoose.connect(dbURI)
    .then(async () => {
        console.log('✅ Connected to MongoDB');

        await InstagramImage.deleteMany({});
        console.log('🧹 Cleared existing image documents');

        const uploadedImages = [];

        for (const imageData of instagramImagesData) {
            const imageFileName = path.basename(imageData.image);
            const localImagePath = path.join(assetsPath, imageFileName);

            if (!fs.existsSync(localImagePath)) {
                console.warn(`⚠️ Image file not found: ${localImagePath}`);
                continue;
            }

            const destination = `instagram_images/${imageFileName}`;

            try {
                await bucket.upload(localImagePath, {
                    destination,
                    metadata: {
                        contentType: `image/${imageFileName.split('.').pop()}`,
                    },
                });

                const [url] = await bucket.file(destination).getSignedUrl({
                    action: 'read',
                    expires: '03-09-2491',
                });

                const fullData = {
                    ...imageData,
                    image: url, // Replace local path with Firebase URL
                };

                const savedDoc = await InstagramImage.create(fullData);
                uploadedImages.push(savedDoc);

                console.log(`✅ Uploaded & saved: ${imageFileName}`);
            } catch (err) {
                console.error(`❌ Failed to upload or save: ${imageFileName}`, err);
            }
        }

        console.log(`🎉 Done. ${uploadedImages.length} images uploaded and saved.`);
        mongoose.connection.close();
    })
    .catch(err => console.error('❌ MongoDB connection error:', err));