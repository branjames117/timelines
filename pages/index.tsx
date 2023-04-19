import { GetServerSideProps } from 'next';
import TimelineList from '../components/timeline/TimelineList';
import { dbConnect } from '../lib/dbConnect';
import { Timeline } from '../models';

export default function IndexPage({ timelines }) {
  return <TimelineList timelines={timelines} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  let fetchedTimelines = [];
  try {
    await dbConnect();
    fetchedTimelines = await Timeline.find()
      .select('-__v')
      //.populate('author')
      .lean();

    fetchedTimelines = JSON.parse(JSON.stringify(fetchedTimelines));
    console.log(fetchedTimelines[0].author);
  } catch (err) {
    console.log(err);
  } finally {
    return {
      props: {
        timelines: fetchedTimelines,
      },
    };
  }
};
