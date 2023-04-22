import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { dbConnect } from '../../../lib/dbConnect';
import { User } from '../../../models';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res
 */
export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) res.status(401).json({ message: 'No active session found.' });

  try {
    await dbConnect();
    await User.findOneAndUpdate({ email: session.user.email }, req.body);
    res.status(200).json({});
  } catch (e) {
    console.error(e);
  }
};
