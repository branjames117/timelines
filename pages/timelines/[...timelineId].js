import Head from 'next/head';
import { models } from 'mongoose';
import { dbConnect } from '../../lib/dbConnect';
import { Timeline } from '../../models';

export default function TimelinePage() {
  return (
    <>
      <Head>
        <title>Timelines / Timeline</title>
      </Head>
      <div>
        WIP - Timeline Page
        <br />
        User must sign in to access the Editor view. Here, the user has a list
        of their own projects and a button to start a new project.
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let timeline = {};
  try {
    console.log('connected to db');
    await dbConnect();
    if (models.Timeline) {
      console.log('found model');
      timeline = await Timeline.findById(context.query.timelineId[0]);
      console.log(timeline);
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      timeline,
    },
  };
}
