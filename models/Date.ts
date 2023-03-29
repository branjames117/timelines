import { Schema } from 'mongoose';

export interface IDate {
  year?: number;
  month?: number;
  day?: number;
}

export const dateSchema = new Schema({
  year: Number,
  month: {
    type: Number,
    min: [0, 'Month cannot be negative.'],
  },
  day: {
    type: Number,
    min: [0, 'Day cannot be negative.'],
  },
});
