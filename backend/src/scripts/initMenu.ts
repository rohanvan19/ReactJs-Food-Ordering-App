import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MenuItem } from '../models/MenuItem.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/feast-express';

const sampleMenuItems = [
  {
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: 12.99,
    image: 'https://source.unsplash.com/random/300x200/?pizza',
    category: 'Pizza',
    isAvailable: true
  },
  {
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, and special sauce',
    price: 9.99,
    image: 'https://source.unsplash.com/random/300x200/?burger',
    category: 'Burger',
    isAvailable: true
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with eggs, cheese, pancetta, and black pepper',
    price: 14.99,
    image: 'https://source.unsplash.com/random/300x200/?pasta',
    category: 'Pasta',
    isAvailable: true
  },
  {
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
    price: 8.99,
    image: 'https://source.unsplash.com/random/300x200/?salad',
    category: 'Salad',
    isAvailable: true
  }
];

const initializeMenu = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing menu items
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items');

    // Insert sample menu items
    await MenuItem.insertMany(sampleMenuItems);
    console.log('Sample menu items inserted successfully');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error initializing menu:', error);
  }
};

initializeMenu(); 