import Image from 'next/image';
import styles from './TimelineListItem.module.scss';

export default function TimelineListItem({ timeline }) {
  return (
    <li>
      <div>Name: {timeline.name}</div>
      <div>Universe: {timeline.universe}</div>
      <div>Author: {timeline.metadata.author.email}</div>
      <div>Character Count: {timeline.characters.length}</div>
      <div>Location Count: {timeline.locations.length}</div>
      <div>Event Count: {timeline.events.length}</div>
      <div className={styles.map}>
        <Image
          alt={`${timeline.name}'s map`}
          className={styles.map}
          src={timeline.map}
          fill
          referrerPolicy='no-referrer'
        />
      </div>
    </li>
  );
}
