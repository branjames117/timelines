import { Schema } from 'mongoose';
import characterSchema from './Character';
import dateSchema from './Date';
import locationSchema from './Location';

const eventSchema = new Schema({
  date: dateSchema,
  title: String,
  description: String,
  image: String,
  location: locationSchema,
  characters: [characterSchema],
});

export default eventSchema;
