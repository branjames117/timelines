import { Schema } from 'mongoose';

const dateFormatSchema = new Schema({
  era: {
    preLabel: {
      type: String,
      default: 'B.C.E.',
    },
    postLabel: {
      type: String,
      default: 'C.E.',
    },
  },
  year: {
    label: {
      type: String,
      default: 'Year',
    },
  },
  month: {
    label: {
      type: String,
      default: 'Month',
    },
    months: [String],
  },
  day: {
    label: {
      type: String,
      default: 'Day',
    },
    days: [String],
  },
});

export default dateFormatSchema;
