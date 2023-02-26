import { SessionProvider } from 'next-auth/react';
import Container from '../components/Container';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}
