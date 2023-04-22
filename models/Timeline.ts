import { Schema, models, model, Model, Types } from 'mongoose';
import { ICharacter, characterSchema } from './Character';
import { IDateFormat, dateFormatSchema } from './DateFormat';
import { IEvent, eventSchema } from './Event';
import { IUser, userSchema } from './User';
import { ILocation, locationSchema } from './Location';

export interface ITimeline {
  name?: string;
  map?: string;
  universe?: string;
  dateFormat?: IDateFormat;
  characters?: ICharacter[];
  locations?: ILocation[];
  events?: IEvent[];
  author?: IUser;
  metadata?: {
    created?: string;
    modified?: string;
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
  characters: {
    type: [characterSchema],
    default: [],
  },
  locations: {
    type: [locationSchema],
    default: [],
  },
  events: {
    type: [eventSchema],
    default: [],
  },
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
    modified: {
      type: Date,
      default: Date.now,
    },
  },
});

export const Timeline: Model<ITimeline> =
  models.Timeline || model<ITimeline>('Timeline', timelineSchema);
