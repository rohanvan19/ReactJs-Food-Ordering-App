import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MenuItem } from '../models/MenuItem.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/feast-express';

const sampleMenuItems = [
  // Pizzas
  {
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "https://source.unsplash.com/random/300x200/?pizza",
    category: "Pizza",
    isAvailable: true
  },
  {
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella and tomato sauce",
    price: 14.99,
    image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
    category: "Pizza",
    isAvailable: true
  },
  {
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: 15.99,
    image: "https://images.pexels.com/photos/5640024/pexels-photo-5640024.jpeg",
    category: "Pizza",
    isAvailable: true
  },

  // Burgers
  {
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 9.99,
    image: "https://source.unsplash.com/random/300x200/?burger",
    category: "Burger",
    isAvailable: true
  },
  {
    name: "Chicken Burger",
    description: "Grilled chicken breast with avocado, bacon, and honey mustard",
    price: 11.99,
    image: "https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg",
    category: "Burger",
    isAvailable: true
  },
  {
    name: "Veggie Burger",
    description: "Plant-based patty with grilled vegetables and vegan mayo",
    price: 12.99,
    image: "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg",
    category: "Burger",
    isAvailable: true
  },

  // Pasta
  {
    name: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with eggs, cheese, pancetta, and black pepper",
    price: 14.99,
    image: "https://source.unsplash.com/random/300x200/?pasta",
    category: "Pasta",
    isAvailable: true
  },
  {
    name: "Fettuccine Alfredo",
    description: "Creamy alfredo sauce with parmesan and garlic",
    price: 12.99,
    image: "https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg",
    category: "Pasta",
    isAvailable: true
  },
  {
    name: "Penne Arrabbiata",
    description: "Spicy tomato sauce with garlic and red chili",
    price: 11.99,
    image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
    category: "Pasta",
    isAvailable: true
  },

  // Salads (now part of main dishes)
  {
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
    price: 8.99,
    image: "https://source.unsplash.com/random/300x200/?salad",
    category: "Salad",
    isAvailable: true
  },
  {
    name: "Greek Salad",
    description: "Mixed greens, feta, olives, tomatoes, and Greek dressing",
    price: 9.99,
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
    category: "Salad",
    isAvailable: true
  },

  // Desserts
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 7.99,
    image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
    category: "Dessert",
    isAvailable: true
  },
  {
    name: "New York Cheesecake",
    description: "Classic cheesecake with berry compote",
    price: 6.99,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    category: "Dessert",
    isAvailable: true
  },

  // Drinks
  {
    name: "Fresh Lemonade",
    description: "Homemade lemonade with mint",
    price: 3.99,
    image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg",
    category: "Drinks",
    isAvailable: true
  },
  {
    name: "Iced Tea",
    description: "Fresh brewed iced tea with lemon",
    price: 2.99,
    image: "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg",
    category: "Drinks",
    isAvailable: true
  }
];

const initializeDatabase = async () => {
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
    console.error('Error initializing database:', error);
  }
};

initializeDatabase(); 