import { dbConnect } from './dbConnect';
import {
  ICharacter,
  IDateFormat,
  IEvent,
  ILocation,
  ITimeline,
  IUser,
  Timeline,
} from '../models';

const characters: ICharacter[] = [
  {
    name: 'Frodo Baggins',
    description:
      "Frodo Baggins, son of Drogo Baggins, was a hobbit of the Shire in the late Third Age. He is commonly considered Tolkien's most renowned character for his leading role in the Quest of the Ring, in which he bore the One Ring to Mount Doom, where it was destroyed. He was a Ring-bearer, best friend to his gardener, Samwise Gamgee, and was one of three hobbits who sailed from Middle-earth to the Uttermost West at the end of the Third Age.",
    birthDate: {
      year: 2968,
      month: 8,
      day: 22,
    },
  },
  {
    name: 'Samwise Gamgee',
    description:
      "Samwise Gamgee, known as Sam, was a hobbit of the Shire. He was Frodo Baggins' gardener and best friend. Sam proved himself to be Frodo's closest and most dependable companion, the most loyal of the Fellowship of the Ring, and played a critical role in protecting Frodo and destroying the One Ring.",
    birthDate: {
      year: 2980,
      month: 3,
      day: 6,
    },
  },
  {
    name: 'Gandalf',
    description:
      'Gandalf the Grey, later known as Gandalf the White, and originally named Olórin, was an Istar (Wizard), dispatched to Middle-earth in the Third Age to combat the threat of Sauron. He joined Thorin II Oakenshield and his company to reclaim the Lonely Mountain from Smaug, helped form the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring.',
    deathDate: {
      year: 3019,
      month: 0,
      day: 25,
    },
  },
];

const locations: ILocation[] = [
  {
    name: 'The Shire',
    description:
      'By the late Third Age it was one of the few heavily-populated areas left in Eriador. Its name in Westron was Sûza, "Shire," or Sûzat, "The Shire." Contrary to popular misconception, the Shire was not the birthplace of Frodo Baggins, as he was born in Buckland, which at the time was not formally part of the Shire despite being colonized by Shire hobbits.',
    x: 120,
    y: 150,
  },
  {
    name: 'Bree',
    description:
      'Bree was a village of Men and hobbits, located east of the Shire and south of Fornost in Eriador.',
    x: 153,
    y: 150,
  },
  {
    name: 'Mordor',
    description: 'Home of the Dark Lord Sauron.',
    x: 500,
    y: 323,
  },
];

const dateFormat: IDateFormat = {
  era: {
    preLabel: 'The Second Age',
    postLabel: 'The Third Age',
  },
  year: {
    label: 'Year',
  },
  month: {
    label: 'Month',
    months: [
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
  day: {
    label: 'Day',
    days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
};

const events: IEvent[] = [
  {
    date: {
      year: 2980,
    },
    description:
      'When Frodo Baggins was only 12 years old, his parents drowned in a boating accident on the Brandywine River.',
  },
];

const timeline: ITimeline = {
  name: 'The Lord of the Rings',
  map: 'https://wallpapercave.com/wp/bK8zri5.jpg',
  universe: 'The Lord of the Rings',
  characters,
  locations,
  events,
  dateFormat,
};

export default async function createTestData(user: IUser) {
  await dbConnect();
  try {
    let timelines = await Timeline.find().lean();
    if (timelines.length) {
      throw Error;
    }
    timeline.author = user;
    await Timeline.create(timeline);
    // timeline.name = 'The Hobbit';
    // await Timeline.create(timeline);
  } catch (err) {
    console.log('Skipping test data creation.');
  }
}
