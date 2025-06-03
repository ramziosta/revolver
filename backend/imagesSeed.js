import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import admin from 'firebase-admin';

import instagramImagesData from './instagramImagesData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serviceAccountPath = path.resolve(__dirname, process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

if (!fs.existsSync(serviceAccountPath)) {
    console.error('❌ Firebase service account key not found at:', serviceAccountPath);
    process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();
const firestore = admin.firestore();

const assetsPath = path.join(__dirname, 'assets');

(async () => {
    try {
        console.log('✅ Connected to Firebase');

        const collectionRef = firestore.collection('instagramImages');

        // Optional: Clear previous documents
        const snapshot = await collectionRef.get();
        const batch = firestore.batch();
        snapshot.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        console.log('🧹 Cleared existing documents from Firestore');

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
                    image: url,
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                };

                await collectionRef.add(fullData);
                uploadedImages.push(fullData);

                console.log(`✅ Uploaded & saved: ${imageFileName}`);
            } catch (err) {
                console.error(`❌ Failed to upload or save: ${imageFileName}`, err);
            }
        }

        console.log(`🎉 Done. ${uploadedImages.length} images uploaded and saved.`);
    } catch (err) {
        console.error('❌ Firebase error:', err);
    }
})();