import { Schema } from 'mongoose';

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

export default locationSchema;
