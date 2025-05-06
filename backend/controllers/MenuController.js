
import MenuSchema from "../models/menu.js";

// Get all menu categories and their subcategories/items
export const getAllMenu = async (req, res) => {
    try {
        const menu = await MenuSchema.find();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific menu category by ID
export const getMenuCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = menuData.find(cat => cat.id === id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Menu category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve menu category', error: error.message });
    }
};

// Get a specific subcategory within a menu category by ID
export const getMenuSubcategory = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;
    try {
        const category = menuData.find(cat => cat.id === categoryId);
        if (category) {
            const subcategory = category.subCategories.find(sub => sub.id === subcategoryId);
            if (subcategory) {
                res.json(subcategory);
            } else {
                res.status(404).json({ message: 'Menu subcategory not found in this category' });
            }
        } else {
            res.status(404).json({ message: 'Menu category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve menu subcategory', error: error.message });
    }
};

// Get a specific item within a menu subcategory by name (you might want to use a unique ID if possible for items)
export const getMenuItemByName = async (req, res) => {
    const { categoryId, subcategoryId, itemName } = req.params;
    try {
        const category = menuData.find(cat => cat.id === categoryId);
        if (category) {
            const subcategory = category.subCategories.find(sub => sub.id === subcategoryId);
            if (subcategory) {
                const item = subcategory.items.find(it => it.name === itemName);
                if (item) {
                    res.json(item);
                } else {
                    res.status(404).json({ message: 'Menu item not found in this subcategory' });
                }
            } else {
                res.status(404).json({ message: 'Menu subcategory not found in this category' });
            }
        } else {
            res.status(404).json({ message: 'Menu category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve menu item', error: error.message });
    }
};

// You can add more controller functions for adding, updating, or deleting menu items
// if your application requires those functionalities.