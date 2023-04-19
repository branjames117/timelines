import { Schema, models, model, Model, Types } from 'mongoose';
import { ICharacter, characterSchema } from './Character';
import { IDateFormat, dateFormatSchema } from './DateFormat';
import { IEvent, eventSchema } from './Event';
import { ILocation, locationSchema } from './Location';
import { IUser } from './User';

export interface ITimeline {
  name: string;
  map?: string;
  universe: string;
  dateFormat?: IDateFormat;
  characters?: ICharacter[];
  locations?: ILocation[];
  events?: IEvent[];
  author: IUser;
  metadata?: {
    created?: string;
    updated?: string;
  };
}

const timelineSchema = new Schema<ITimeline>({
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
  author: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  metadata: {
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
  return this.locations.length || 0;
});

export const Timeline: Model<ITimeline> =
  models.Timeline || model<ITimeline>('Timeline', timelineSchema);
