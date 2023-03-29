import { Schema } from 'mongoose';

export interface ILocation {
  name: string;
  description?: string;
  x: number;
  y: number;
}

export const locationSchema = new Schema<ILocation>({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  description: String,
  x: {
    type: Number,
    required: [true, 'X is required.'],
  },
  y: {
    type: Number,
    required: [true, 'Y is required.'],
  },
});
