import mongoose from 'mongoose';

const InstagramImageSchema = new mongoose.Schema({
    title: String,
    alt: String,
    category: String,
    description: String,
    image: String,
    href: String
});

const InstagramImage = mongoose.model('InstagramImage', InstagramImageSchema);
export default InstagramImage;