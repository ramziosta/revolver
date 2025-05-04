import mongoose from 'mongoose';

const traderSchema = new mongoose.Schema({
    id: { type: String, },
    name: { type: String, },
    type: { type: String, },
    description: { type: String, },
    location: { type: String, },
    salary: { type: String, },
    company: {
        name: { type: String, },
        location: { type: String, },
        description: { type: String, },
        contactEmail: { type: String, },
        contactPhone: { type: String, },
    },
}, { timestamps: true });

const Trader = mongoose.model('Trader', traderSchema);

export default Trader;