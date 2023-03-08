import { Schema, models, model } from 'mongoose';
import characterSchema from './Character';
import dateFormatSchema from './DateFormat';
import eventSchema from './Event';
import locationSchema from './Location';
import { userSchema } from './User';

const timelineSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  map: String,
  universe: {
    type: String,
    required: [true, 'Universe is required.'],
  },
  dateFormat: dateFormatSchema,
  characters: [characterSchema],
  locations: [locationSchema],
  events: [eventSchema],
  metadata: {
    author: userSchema,
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
});

timelineSchema.virtual('locationCount').get(function () {
  return this.map.locations.length || 0;
});

export default models.Timeline || model('Timeline', timelineSchema);
