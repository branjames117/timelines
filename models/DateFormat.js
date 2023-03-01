import { Schema } from 'mongoose';

const dateFormatSchema = new Schema({
  era: {
    pre: {
      type: String,
      default: 'B.C.E.',
    },
    post: {
      type: String,
      default: 'C.E.',
    },
  },
  year: {
    name: {
      type: String,
      default: 'Year',
    },
  },
  month: {
    name: {
      type: String,
      default: 'Month',
    },
    months: {
      type: [String],
      default: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  },
  day: {
    name: {
      type: String,
      default: 'Day',
    },
    days: {
      type: [String],
      default: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
  },
});

export default dateFormatSchema;
