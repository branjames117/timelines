import { Schema } from 'mongoose';

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  pinColor: String,
});

export default characterSchema;
