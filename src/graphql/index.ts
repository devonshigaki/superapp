import { ApolloServer } from 'apollo-server-micro';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    // Add authentication and authorization logic here
    // Example:
    // user: req.user,
    // token: req.headers.authorization,
  }),
});

export default apolloServer;
