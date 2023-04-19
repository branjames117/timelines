import Image from 'next/image';
import styles from './TimelineListItem.module.scss';

export default function TimelineListItem({ timeline }) {
  const mapStyles = {
    backgroundImage: `url(${timeline.map})`,
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.mapPane} style={mapStyles}></div>
      <div className={styles.textPane}>
        <h3>{timeline.name}</h3>
        <div>Universe: {timeline.universe}</div>
        <div>Timeline created by {timeline.author.username}</div>
        <div>Tracked Characters: {timeline.characters.length}</div>
        <div>Pinned Locations: {timeline.locations.length}</div>
        <div>Documented Events: {timeline.events.length}</div>
      </div>
    </li>
  );
}
