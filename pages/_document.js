import { Html, Head, Main, NextScript } from 'next/document';

console.log(process.env.GOOGLE_ID);
export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
