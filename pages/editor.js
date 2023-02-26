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
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) return { redirect: { destination: '/' } };

  let user = {};
  try {
    await dbConnect();
    user = await models.User.findOne({ email: session.user.email });
    if (!user) {
      // first-time login, create a new user associated with the email address
      await User.create({ email: session.user.email });
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      user: session.user,
    },
  };
}
