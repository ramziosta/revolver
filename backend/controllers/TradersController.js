import Trader from '../models/Trader.js';

// Get all traders
export const getAllTraders = async (req, res) => {
    try {
        const traders = await Trader.find();
        res.json(traders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single trader by ID
export const getOneTrader = async (req, res) => {
    // Change this line to match how Express provides route parameters
    const id = req.params.id;

    try {
        const trader = await Trader.findOne({ id });

        if (!trader) {
            return res.status(404).json({ message: 'Trader not found' });
        }
        res.json(trader);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Create a new trader
export const createTrader = async (req, res) => {
    const { id, name, type, description, location, salary, company } = req.body;

    try {
        const newTrader = new Trader({
            id,
            name,
            type,
            description,
            location,
            salary,
            company,
        });
        const savedTrader = await newTrader.save();
        res.status(201).json(savedTrader);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a trader by ID
export const updateTrader = async (req, res) => {
    const { id } = req.params;
    const { name, type, description, location, salary, company } = req.body;

    try {
        const updatedTrader = await Trader.findOneAndUpdate(
            { id },
            { name, type, description, location, salary, company },
            { new: true }
        );

        if (!updatedTrader) {
            return res.status(404).json({ message: 'Trader not found' });
        }

        res.json(updatedTrader);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a trader by ID
export const deleteTrader = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTrader = await Trader.findOneAndDelete({ id });

        if (!deletedTrader) {
            return res.status(404).json({ message: 'Trader not found' });
        }

        res.status(200).json({ message: 'Trader deleted successfully', deletedTrader });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};