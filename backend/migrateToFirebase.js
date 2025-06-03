import fs from 'fs';
import path from 'path';
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(
    fs.readFileSync(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH, 'utf8')
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Load JSON files
const menuData = JSON.parse(fs.readFileSync('./menuData.json', 'utf8'));
const bakedGoods = JSON.parse(fs.readFileSync('./bakedGoodsMenuData.json', 'utf8'));
const cateringData = JSON.parse(fs.readFileSync('./cateringMenuData.json', 'utf8'));

// Upload to Firestore
const seedCollection = async (collectionName, data) => {
    const batch = db.batch();
    const collectionRef = db.collection(collectionName);

    data.forEach((item) => {
        const docRef = collectionRef.doc(); // auto-ID
        batch.set(docRef, item);
    });

    await batch.commit();
    console.log(`✅ Seeded ${data.length} documents to '${collectionName}'`);
};

const run = async () => {
    try {
        await seedCollection('menu', menuData);
        await seedCollection('bakedGoods', bakedGoods);
        await seedCollection('catering', cateringData);
        console.log('🎉 All menus uploaded successfully!');
        process.exit();
    } catch (err) {
        console.error('❌ Failed to upload:', err);
        process.exit(1);
    }
};

run();