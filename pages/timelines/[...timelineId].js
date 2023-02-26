import Head from 'next/head';
import Image from 'next/image';
import { dbConnect } from '../../lib/dbConnect';
import { Timeline } from '../../models';

export default function TimelinePage(props) {
  const timeline = JSON.parse(props.timeline);
  console.log(timeline);
  return (
    <>
      <Head>
        <title>Timelines / Timeline</title>
      </Head>
      <div>
        WIP - Timeline Page
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
  );
}

export async function getServerSideProps(context) {
  let timeline = {};
  try {
    await dbConnect();
    timeline = await Timeline.findById(context.query.timelineId[0]);
  } catch (err) {
    console.log(err);
  }
  console.log(timeline);

  return {
    props: {
      timeline: JSON.stringify(timeline),
    },
  };
}
