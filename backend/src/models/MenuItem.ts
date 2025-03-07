import mongoose from 'mongoose';

export interface IMenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean;
}

const menuItemSchema = new mongoose.Schema<IMenuItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  isAvailable: { type: Boolean, default: true }
}, {
  timestamps: true
});

export const MenuItem = mongoose.model<IMenuItem>('MenuItem', menuItemSchema); 