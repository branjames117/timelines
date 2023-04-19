import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { dbConnect } from '../../../lib/dbConnect';
import { Timeline, User } from '../../../models';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res
 */
export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) res.status(401).json({ message: 'No active session found.' });

  try {
    await dbConnect();

    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      req.body
    );

    // update username in their existing timelines
    const timelines = await Timeline.updateMany(
      { 'author.email': user.email },
      { 'author.username': user.username }
    );

    res.status(200).json({ user });
  } catch (e) {
    console.error(e);
  }
};
