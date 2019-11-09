import { GQL_PasswordResultResolvers, GQL_PasswordResult, GQL_ItemDrop } from 'graphql-resolvers';
import { IFieldMixMap } from '@app/data';

export const secondaryItemResolver: GQL_PasswordResultResolvers['secondaryItem'] = async (parent, args, { services, loaders }) => {
  const { secondaryItemName } = parent as GQL_PasswordResult & IFieldMixMap;

  return {
    name: secondaryItemName,
  } as GQL_ItemDrop;
};
