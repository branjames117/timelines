import { Schema } from 'mongoose';

const locationSchema = new Schema({
  name: String,
  x: Number,
  y: Number,
});

export default locationSchema;
