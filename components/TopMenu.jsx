import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './TopMenu.module.scss';

export default function TopMenu() {
  const { data, status } = useSession();
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>Timelines</li>
        <li>Editor</li>
        <li>My Timelines</li>
        {status === 'authenticated' ? (
          <>
            <li>
              <img src={data.user.image} referrerPolicy='no-referrer' />
            </li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() =>
                signIn('google', {
                  callbackUrl: `${window.location.origin}/editor`,
                })
              }
            >
              Sign In
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
