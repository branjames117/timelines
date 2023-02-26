import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='User-generated timeline app' />
        <meta name='og:title' content='Timelines' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
