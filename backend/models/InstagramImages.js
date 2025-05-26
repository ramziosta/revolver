import mongoose from 'mongoose';

const InstagramImageSchema = new mongoose.Schema({
    title: String,
    alt: String,
    category: String,
    description: String,
    image: String, // URL to the image
    href: String    // Optional: link to a page or post
});

module.exports = mongoose.model('InstagramImage', InstagramImageSchema);