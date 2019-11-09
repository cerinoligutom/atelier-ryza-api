import { GQL_PasswordResult, GQL_QueryResolvers } from 'graphql-resolvers';
import { IFieldMixMap } from '@app/data';

type PasswordResult = GQL_PasswordResult & IFieldMixMap;

export const itemNameResolver: GQL_QueryResolvers['itemName'] = async (_, { input }, { services }) => {
  const { itemDropsService } = services;

  const results = itemDropsService.findByName(input);

  return results as PasswordResult[];
};
