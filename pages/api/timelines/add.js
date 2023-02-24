import connection from '../../../lib/connection';
import Timeline from '../../../models/Timeline';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res
 */
export default async (req, res) => {
  try {
    await connection();

    const timeline = await Timeline.create(req.body);

    res.status(200).json({ timeline });
  } catch (e) {
    console.error(e);
  }
};
