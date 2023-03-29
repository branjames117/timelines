import { Schema, models, model, Model } from 'mongoose';
import { ICharacter, characterSchema } from './Character';
import { IDateFormat, dateFormatSchema } from './DateFormat';
import { IEvent, eventSchema } from './Event';
import { ILocation, locationSchema } from './Location';
import { IUser, userSchema } from './User';

export interface ITimeline {
  name: string;
  map?: string;
  universe: string;
  dateFormat?: IDateFormat;
  characters?: ICharacter[];
  locations?: ILocation[];
  events?: IEvent[];
  metadata: {
    author: IUser;
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
  return this.locations.length || 0;
});

export const Timeline: Model<ITimeline> =
  models.Timeline || model<ITimeline>('Timeline', timelineSchema);
