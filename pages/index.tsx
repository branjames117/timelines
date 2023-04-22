import { GetServerSideProps } from 'next';
import TimelineList from '../components/timeline/TimelineList';
import { dbConnect } from '../lib/dbConnect';
import { Timeline } from '../models';

export default function IndexPage({ timelines }) {
  // todo: add search features (by universe, by name, by author)
  return <TimelineList timelines={timelines} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  let fetchedTimelines = [];
  try {
    await dbConnect();
    // todo: implement paging by loading 30, then loading next 30 when
    // user reaches bottom of list
    fetchedTimelines = await Timeline.find()
      .populate({ path: 'author', select: '_id username showProfilePicture' })
      .lean();
    fetchedTimelines = JSON.parse(JSON.stringify(fetchedTimelines));
  } catch (err) {
    return {
      props: null,
      redirect: {
        destination: '/404',
      },
    };
  } finally {
    return {
      props: {
        timelines: fetchedTimelines || [],
      },
    };
  }
};
