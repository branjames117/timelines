import Head from 'next/head';
import Image from 'next/image';
import { Types } from 'mongoose';
import { dbConnect } from '../../lib/dbConnect';
import { Timeline } from '../../models';

export default function TimelinePage(props) {
  let timeline;
  if (props.timeline) {
    timeline = JSON.parse(props.timeline);
  }
  return timeline ? (
    <>
      <Head>
        <title>Timelines / Timeline</title>
      </Head>
      <div>
        WIP - Timeline Page for {timeline.name} of {timeline.universe}
        <Image
          src={`${timeline.map.url}`}
          alt='Map'
          style={{ objectFit: 'cover' }}
          width={500}
          height={500}
        />
        <br />
        User must sign in to access the Editor view. Here, the user has a list
        of their own projects and a button to start a new project.
      </div>
    </>
  ) : (
    <>
      <Head>
        <title>Timeline Lost</title>
      </Head>
      <h1>Timeline not found. You lost, Doc?</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  let id = context.query.timelineId[0];
  let timeline;
  try {
    if (Types.ObjectId.isValid(id)) {
      await dbConnect();
      timeline = await Timeline.findById(id);
      timeline = JSON.stringify(timeline);
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
