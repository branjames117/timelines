import { Schema, models, model } from 'mongoose';

const timelineSchema = new Schema({
  name: String,
  universe: {
    type: String,
    required: true,
    unique: true,
  },
});

export default models.Timeline || model('Timeline', timelineSchema);
