import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { signOut } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dbConnect } from '../lib/dbConnect';
import { User } from '../models';
import { useState } from 'react';
import createTestData from '../lib/testData';

export default function ProfilePage({ user }) {
  const [updated, setUpdated] = useState(false);

  // formik logic
  const { touched, values, handleChange, handleBlur, handleSubmit, errors } =
    useFormik<{
      username: string;
      description: string;
      showProfilePicture: boolean;
    }>({
      initialValues: {
        username: user.username || '',
        description: user.description || '',
        showProfilePicture: user.showProfilePicture || false,
      },

      validationSchema: Yup.object({
        username: Yup.string()
          .max(50, 'Username must be no longer than 50 characters.')
          .required('Username is required.'),
        description: Yup.string().max(
          255,
          'Description must be no longer than 255 characters.'
        ),
      }),

      onSubmit: async (values) => {
        const response = await fetch('/api/user/update', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          setUpdated(true);
        }
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username </label>
          <input
            placeholder='Enter a unique public username'
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{touched.username && errors.username}</span>
        </div>{' '}
        <div>
          <label htmlFor='description'>Description </label>
          <textarea
            placeholder='Tell us about yourself'
            name='description'
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{touched.description && errors.description}</span>
        </div>{' '}
        <div>
          <label htmlFor='showProfilePicture'>Show Profile Picture? </label>
          <input
            type='checkbox'
            name='showProfilePicture'
            checked={values.showProfilePicture}
            onChange={handleChange}
          />
        </div>
        <div>Joined: {user.joined}</div>
        <div>Last Login: {user.lastLogin}</div>
        <div>
          <button type='submit'>Save Changes</button>
        </div>
      </form>
      <button onClick={() => signoutHandler()}>Sign Out</button>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session)
    return {
      props: null,
      redirect: {
        destination: '/',
      },
    };

  let user = session.user;

  try {
    await dbConnect();
    let fetchedUser = await User.findOne({ email: user.email }).select('-__v');
    // if user has no record, create record
    if (!fetchedUser) {
      fetchedUser = await User.create({
        email: user.email,
        username: user.email,
      });
      if (!fetchedUser) {
        return {
          props: null,
          redirect: {
            destination: '/404',
          },
        };
      }
    }
    user = { ...JSON.parse(JSON.stringify(fetchedUser)), ...user };
    await createTestData(fetchedUser);
  } catch (err) {
    return {
      props: null,
      redirect: { destination: '/404' },
    };
  }

  return {
    props: {
      user,
    },
  };
};
