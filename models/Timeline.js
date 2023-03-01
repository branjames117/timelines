import { Schema, models, model } from 'mongoose';
import characterSchema from './Character';
import dateFormatSchema from './DateFormat';
import eventSchema from './Event';
import locationSchema from './Location';

const timelineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  map: String,
  universe: {
    type: String,
    required: true,
  },
  dateFormat: dateFormatSchema,
  characters: [characterSchema],
  locations: [locationSchema],
  events: [eventSchema],
  metadata: {
    author: Schema.Types.ObjectId,
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
