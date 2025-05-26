import InstagramImage from '../models/InstagramImages.js';


const imageController = async (req, res) => {
    try {
        const images = await InstagramImage.find();
        res.json(images);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

export default imageController;