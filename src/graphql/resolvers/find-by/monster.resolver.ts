import { GQL_PasswordResultResolvers, GQL_PasswordResult, GQL_EnemyMonster } from 'graphql-resolvers';
import { IFieldMixMap } from '@app/data';

export const monsterResolver: GQL_PasswordResultResolvers['monster'] = async (parent, args, { loaders }) => {
  const { fieldMixMapInfoNo } = parent as GQL_PasswordResult & IFieldMixMap;

  const { fieldMixMapInfoById, enemyById, fieldMixEnemyById } = loaders;

  const fieldMixMapInfo = await fieldMixMapInfoById.load(fieldMixMapInfoNo);

  if (fieldMixMapInfo) {
    const fieldMixEnemy = await fieldMixEnemyById.load(fieldMixMapInfo.enemyId);

    if (fieldMixEnemy) {
      const enemy = await enemyById.load(fieldMixEnemy.monsterTag);

      return {
        name: enemy?.monsterName,
      } as GQL_EnemyMonster;
    }
  }

  return null;
};
