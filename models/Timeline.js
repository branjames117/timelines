import { Schema, models, model } from 'mongoose';

const timelineSchema = new Schema({
  name: String,
  map: {
    url: String,
    name: String,
  },
  universe: {
    type: String,
    required: true,
    unique: true,
  },
});

let Timeline;
try {
  Timeline = models.Timeline;
  console.log(Timeline);
} catch (err) {
  console.log(err);
  Timeline = model('Timeline', timelineSchema);
  console.log(Timeline);
}

export default Timeline;
