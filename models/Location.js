import { Schema } from 'mongoose';

const locationSchema = new Schema({
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

export default locationSchema;
