import { dbConnect } from '../../../lib/dbConnect';
import { User } from '../../../models';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res
 */
export default async (req, res) => {
  try {
    await dbConnect();

    const user = {};
    // figure this out later
    // const user = await User.findOneAndUpdate(req.body);

    res.status(200).json({ user });
  } catch (e) {
    console.error(e);
  }
};
