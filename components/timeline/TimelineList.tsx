import TimelineListItem from './TimelineListItem';

export default function TimelineList({ timelines }) {
  return (
    <ul>
      {timelines.map((timeline, index) => (
        <TimelineListItem timeline={timeline} key={index}></TimelineListItem>
      ))}
    </ul>
  );
}
