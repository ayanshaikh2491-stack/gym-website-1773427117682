import type { NextApiRequest, NextApiResponse } from 'next';

const gymData = {
  name: 'Gym Website',
  services: ['Weightlifting', 'Cardio', 'Personal Training'],
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(gymData);
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;