import Head from 'next/head';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default function EditorPage() {
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

  return {
    props: {},
  };
}
