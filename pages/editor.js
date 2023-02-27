import Head from 'next/head';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { dbConnect } from '../lib/dbConnect';
import { User } from '../models';

export default function EditorPage(props) {
  return (
    <>
      <Head>
        <title>Timelines / Editor</title>
      </Head>
      <div>
        WIP - Editor Page
        <br />
        User must sign in to access the Editor view. Here, the user has a list
        of their own projects and a button to start a new project.
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let { user } = await getServerSession(context.req, context.res, authOptions);

  if (!user) return { redirect: { destination: '/' } };

  let fetchedUser = {};
  try {
    console.log('connecting to db');
    await dbConnect();
    fetchedUser = await User.findOne({ email: user.email });
    console.log(fetchedUser);
    if (fetchedUser) {
      fetchedUser = JSON.parse(JSON.stringify(fetchedUser));
    } else {
      // first-time login, create a new user associated with the email address
      const newUser = await User.create({
        email: user.email,
        username: user.email,
        description: '',
      });
      fetchedUser = JSON.parse(JSON.stringify(newUser));
    }
  } catch (err) {
    console.log(err);
  }
  fetchedUser = {
    username: 'hi',
    description: 'hi',
    showProfilePicture: true,
  };

  return {
    props: {
      user: fetchedUser,
    },
  };
}
