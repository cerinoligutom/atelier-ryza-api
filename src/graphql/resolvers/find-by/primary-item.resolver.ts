import { GQL_PasswordResultResolvers, GQL_PasswordResult, GQL_ItemDrop } from 'graphql-resolvers';
import { IFieldMixMap } from '@app/data';

export const primaryItemResolver: GQL_PasswordResultResolvers['primaryItem'] = async (parent, args, { loaders }) => {
  const { primaryItemName } = parent as GQL_PasswordResult & IFieldMixMap;

  return {
    name: primaryItemName,
  } as GQL_ItemDrop;
};
