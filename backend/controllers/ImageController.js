import InstagramImages from '../models/InstagramImages.js';




const getAllImages = async (req, res) => {
    try {
        const images = await InstagramImages.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export default getAllImages;