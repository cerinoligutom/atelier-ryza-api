import { GQL_PasswordResultResolvers, GQL_PasswordResult, GQL_EnemyBoss } from 'graphql-resolvers';
import { IFieldMixMap } from '@app/data';
import { EnemyBossType } from '@app/graphql/enums';

export const bossResolver: GQL_PasswordResultResolvers['boss'] = async (parent, args, { loaders }) => {
  const { fieldMixMapInfoNo, mapName } = parent as GQL_PasswordResult & IFieldMixMap;

  const { fieldMixMapInfoById, enemyById, fieldMixEnemyById } = loaders;

  const fieldMixMapInfo = await fieldMixMapInfoById.load(fieldMixMapInfoNo);

  if (fieldMixMapInfo) {
    const fieldMixEnemy = await fieldMixEnemyById.load(fieldMixMapInfo.bossId);

    if (fieldMixEnemy) {
      const enemy = await enemyById.load(fieldMixEnemy.monsterTag);

      let bossType: EnemyBossType;
      switch (mapName.split(' ').pop()) {
        case EnemyBossType.DOMAIN:
          bossType = EnemyBossType.DOMAIN;
          break;

        case EnemyBossType.RAVINE:
          bossType = EnemyBossType.RAVINE;
          break;

        default:
          bossType = EnemyBossType.REGULAR;
      }

      return {
        name: enemy?.monsterName,
        type: bossType,
      } as GQL_EnemyBoss;
    }
  }

  return null;
};
