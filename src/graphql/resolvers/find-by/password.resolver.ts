import { GQL_QueryResolvers, GQL_PasswordResult } from 'graphql-resolvers';
import { IFieldMixMap } from '@app/data';

type PasswordResult = GQL_PasswordResult & IFieldMixMap;

export const passwordResolver: GQL_QueryResolvers['password'] = async (_, { input }, { services }) => {
  const { bottlePasswordsService } = services;

  const results = await bottlePasswordsService.getByPassword(input);

  return results as PasswordResult[];
};
