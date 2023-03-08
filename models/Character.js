import { Schema } from 'mongoose';
import dateSchema from './Date';

const characterSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  description: String,
  pinColor: String,
  birthDate: dateSchema,
  deathDate: dateSchema,
});

export default characterSchema;
