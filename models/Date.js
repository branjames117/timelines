import { Schema } from 'mongoose';

const dateSchema = new Schema({
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

export default dateSchema;
