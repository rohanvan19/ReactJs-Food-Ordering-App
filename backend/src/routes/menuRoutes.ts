import express from 'express';
import {
  getAllMenuItems,
  getMenuItemsByCategory,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} from '../controllers/menuController.js';

const router = express.Router();

// Get all menu items
router.get('/', getAllMenuItems);

// Get menu items by category (this must come before /:id)
router.get('/category/:category', getMenuItemsByCategory);

// Get menu item by ID
router.get('/:id', getMenuItemById);

// Create menu item
router.post('/', createMenuItem);

// Update menu item
router.put('/:id', updateMenuItem);

// Delete menu item
router.delete('/:id', deleteMenuItem);

export default router; 