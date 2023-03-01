import { Schema } from 'mongoose';
import characterSchema from './Character';
import locationSchema from './Location';

const eventSchema = new Schema({
  date: {
    year: Number,
    month: String,
    day: Number,
  },
  title: String,
  description: String,
  image: String,
  location: locationSchema,
  characters: [characterSchema],
});

export default eventSchema;
