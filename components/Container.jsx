import Head from 'next/head';
import styles from './Container.module.css';
import TopMenu from './TopMenu';

export const siteTitle = 'Timelines';

export default function Container({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='User-generated timeline app' />
        <meta name='og:title' content='Timelines' />
        <meta name='twitter:card' content='summary_large_image' />
        <title>Timelines</title>
      </Head>
      <TopMenu />
      <main className={styles.main}>{children}</main>
    </>
  );
}
