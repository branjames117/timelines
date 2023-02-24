import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default function MyTimelinesPage(props) {
  console.log(props);
  return (
    <div>
      WIP - My Timelines Page
      <br />
      User must sign in to access the My Timelines and Editor view, but can
      otherwise access this Timelines view only. Here, the user is presented
      with a list of published Timelines, and can choose which Timeline to load
      into the Viewer.
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);

  return {
    props: {
      user: session,
    },
  };
}
