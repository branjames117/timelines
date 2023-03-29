import { Schema } from 'mongoose';
import { IDate, dateSchema } from './Date';

export interface ICharacter {
  name: string;
  description?: string;
  pinColor?: string;
  birthDate?: IDate;
  deathDate?: IDate;
}

export const characterSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  description: String,
  pinColor: String,
  birthDate: dateSchema,
  deathDate: dateSchema,
});
