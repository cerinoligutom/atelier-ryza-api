import { GQL_QueryResolvers } from 'graphql-resolvers';

export const nodeResolver: GQL_QueryResolvers['node'] = async (parent, { id }, { loaders }, info) => {
  return null;
};
