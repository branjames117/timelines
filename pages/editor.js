import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { dbConnect } from '../lib/dbConnect';
import User from '../models/User';

export default function EditorPage(props) {
  return (
    <div>
      WIP - Editor Page
      <br />
      User must sign in to access the Editor view. Here, the user has a list of
      their own projects and a button to start a new project.
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) return { redirect: { destination: '/' } };

  await dbConnect();
  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    // first-time login, create a new user associated with the email address
    await User.create({ email: session.user.email });
  }

  return {
    props: {
      user: session.user,
    },
  };
}
