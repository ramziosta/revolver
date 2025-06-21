import fs from 'fs';
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

// Load JSON data
const menuData = JSON.parse(fs.readFileSync('./menuData.json', 'utf8'));
const bakedGoods = JSON.parse(fs.readFileSync('./bakedGoodsMenuData.json', 'utf8'));
// const cateringData = JSON.parse(fs.readFileSync('./cateringMenuData.json', 'utf8'));
const cellarData = JSON.parse(fs.readFileSync('./cellarMenuData.json', 'utf8'));

// Delete all documents in a collection
const clearCollection = async (collectionName) => {
    const snapshot = await db.collection(collectionName).get();
    const batch = db.batch();

    snapshot.forEach((doc) => {
        batch.delete(doc.ref);
    });

    if (!snapshot.empty) {
        await batch.commit();
        console.log(`🗑️ Cleared '${collectionName}' collection (${snapshot.size} docs)`);
    } else {
        console.log(`ℹ️ No existing documents to delete in '${collectionName}'`);
    }
};

// Upload documents
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

// Main run function
const run = async () => {
    try {
        const collectionName = 'bakedGoods';

        await clearCollection(collectionName);        // Step 1: Clear old
        await seedCollection(collectionName, bakedGoods); // Step 2: Upload new

        console.log('🎉 All menus refreshed successfully!');
        process.exit();
    } catch (err) {
        console.error('❌ Failed to refresh menu data:', err);
        process.exit(1);
    }
};

run();