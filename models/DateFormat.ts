import { Schema } from 'mongoose';

export interface IDateFormat {
  era?: {
    preLabel?: string;
    postLabel?: string;
  };
  year?: {
    label?: string;
  };
  month?: {
    label?: string;
    months?: string[];
  };
  day?: {
    label?: string;
    days?: string[];
  };
}

export const dateFormatSchema = new Schema<IDateFormat>({
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
