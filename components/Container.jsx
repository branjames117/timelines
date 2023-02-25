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
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <title>{siteTitle}</title>
      </Head>
      <TopMenu />
      <main className={styles.main}>{children}</main>
    </>
  );
}
