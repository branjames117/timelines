import Head from 'next/head';
import { models } from 'mongoose';
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
    await dbConnect();
    fetchedUser = await User.findOne({ email: user.email });
    if (fetchedUser) {
      fetchedUser = JSON.parse(JSON.stringify(fetchedUser));
    }
    if (!user) {
      // first-time login, create a new user associated with the email address
      const newUser = await User.create({ email: user.email });
      fetchedUser = JSON.parse(JSON.stringify(newUser));
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      user: fetchedUser,
    },
  };
}
