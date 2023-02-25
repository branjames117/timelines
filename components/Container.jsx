import styles from './Container.module.css';
import TopMenu from './TopMenu';

export const siteTitle = 'Timelines';

export default function Container({ children }) {
  return (
    <>
      <TopMenu />
      <main className={styles.main}>{children}</main>
    </>
  );
}
