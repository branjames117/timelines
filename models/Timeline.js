import { Schema, models, model } from 'mongoose';
import locationSchema from './Location';

const timelineSchema = new Schema({
  name: String,
  map: {
    url: String,
    name: String,
    locations: [locationSchema],
  },
  universe: {
    type: String,
    required: true,
    unique: true,
  },
});

timelineSchema.virtual('locationCount').get(function () {
  return this.map.locations.length || 0;
});

export default models.Timeline || model('Timeline', timelineSchema);
