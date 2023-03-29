import { dbConnect } from '../../../lib/dbConnect';
import { Timeline } from '../../../models';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res
 */
export default async (req, res) => {
  try {
    await dbConnect();

    const timeline = await Timeline.create(req.body);

    res.status(200).json({ timeline });
  } catch (e) {
    console.error(e);
  }
};
