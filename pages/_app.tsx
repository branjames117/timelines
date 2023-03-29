import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Container from '../components/Container';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}
