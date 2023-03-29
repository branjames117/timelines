import { Schema } from 'mongoose';
import { ICharacter, characterSchema } from './Character';
import { IDate, dateSchema } from './Date';
import { ILocation, locationSchema } from './Location';

export interface IEvent {
  date?: IDate;
  title?: string;
  description?: string;
  image?: string;
  location?: ILocation;
  characters?: ICharacter[];
}

export const eventSchema = new Schema({
  date: dateSchema,
  title: String,
  description: String,
  image: String,
  location: locationSchema,
  characters: [characterSchema],
});
