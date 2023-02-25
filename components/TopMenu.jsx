import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { Tooltip } from 'react-tooltip';
import styles from './TopMenu.module.scss';

export default function TopMenu() {
  const { data, status } = useSession();
  const authenticated = status === 'authenticated';

  function signinHandler() {
    signIn('google', {
      callbackUrl: '/profile',
    });
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href='/'>Timelines</a>
          </li>
          {authenticated ? (
            <li>
              <span>
                <a href='/editor'>Editor</a>
              </span>
              <a
                href='/profile'
                data-tooltip-id='profile'
                data-tooltip-content='Profile'
              >
                <Image
                  alt={`${data.user.name}'s profile image`}
                  className={styles.profileImage}
                  src={data.user.image}
                  height={50}
                  width={50}
                  referrerPolicy='no-referrer'
                />
              </a>
              <Tooltip noArrow id='profile' />
            </li>
          ) : (
            <li>
              <button onClick={signinHandler}>SIGN IN</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
