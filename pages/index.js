import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      <Link href='/editor'>Editor</Link>
      WIP - Timelines Page
      <br />
      User must sign in to access the My Timelines and Editor view, but can
      otherwise access this Timelines view only. Here, the user is presented
      with a list of published Timelines, and can choose which Timeline to load
      into the Viewer.
    </div>
  );
}
