import Head from 'next/head';
import { signOut } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dbConnect } from '../lib/dbConnect';
import { User } from '../models';
import { useState } from 'react';

export default function ProfilePage({ user }) {
  const [updated, setUpdated] = useState(false);

  // formik logic
  const formik = useFormik({
    initialValues: {
      username: user.username || '',
      description: user.description || '',
      showProfilePicture: user.showProfilePicture || false,
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, 'Username must be no longer than 20 characters.')
        .required('Username is required.'),
      description: Yup.string().max(
        255,
        'Description must be no longer than 255 characters.'
      ),
    }),

    onSubmit: (values) => {
      console.log(values);
      setUpdated(true);
      // update user's document via update to /user/update
    },
  });

  function signoutHandler() {
    signOut({ callbackUrl: '/' });
  }

  return (
    <>
      <Head>
        <title>Timelines / My Profile</title>
      </Head>
      {updated && <div>Profile updated successfully.</div>}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='username'>Name</label>
          <input
            placeholder='Enter a unique public username'
            type='text'
            name='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>{formik.touched.username && formik.errors.username}</span>
        </div>{' '}
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            placeholder='Tell us about yourself'
            type='text'
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>{formik.touched.description && formik.errors.description}</span>
        </div>{' '}
        <div>
          <label htmlFor='showProfilePicture'>Show Profile Picture?</label>
          <input
            type='checkbox'
            name='showProfilePicture'
            checked={formik.values.showProfilePicture}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <button type='submit'>Save Changes</button>
        </div>
      </form>
      <button onClick={() => signoutHandler()}>Sign Out</button>
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
