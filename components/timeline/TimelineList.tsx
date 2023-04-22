import TimelineListItem from './TimelineListItem';

export default function TimelineList({ timelines }) {
  return (
    <ul>
      {timelines.length ? (
        timelines.map((timeline, index) => (
          <TimelineListItem
            timeline={timeline}
            key={timeline._id}
          ></TimelineListItem>
        ))
      ) : (
        <div>No timelines found.</div>
      )}
    </ul>
  );
}
