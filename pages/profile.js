import Head from 'next/head';
import { signOut } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { dbConnect } from '../lib/dbConnect';
import { User } from '../models';

export default function ProfilePage(props) {
  function signoutHandler() {
    signOut({ callbackUrl: '/' });
  }

  return (
    <>
      <Head>
        <title>Timelines / My Profile</title>
      </Head>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
      <div>
        WIP - Profile Page
        <br />
        User must sign in to access the Profile view. Here, the user can enter
        or update their (unique) username and some biographical information
        about themselves, including their birthdate if they so choose.
        <br />
        <button onClick={signoutHandler}>Sign Out</button>
      </div>
    </>
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
