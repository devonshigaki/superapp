import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import apolloServer from '../graphql';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await apolloServer.startStandaloneServer();
  await apolloServerHandler(req, res);
};
