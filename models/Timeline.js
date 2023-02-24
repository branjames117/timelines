import { Schema, model, models } from 'mongoose';

const timelineSchema = new Schema({
  name: String,
  universe: {
    type: String,
    required: true,
    unique: true,
  },
});

// create model if it does not exist
const Timeline = models.Timeline || model('Timeline', timelineSchema);

export default Timeline;
