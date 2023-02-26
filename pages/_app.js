import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import Container from '../components/Container';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='User-generated timeline app' />
        <meta name='og:title' content='Timelines' />
        <meta name='twitter:card' content='summary_large_image' />
        <title>Timelines</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SessionProvider>
    </>
  );
}
