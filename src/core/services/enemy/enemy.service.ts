import { qbEnemyData } from '@app/data';

function getByIds(ids: string[]) {
  return qbEnemyData.whereIn('monsterTag', ids).exec();
}

export const enemyService = { getByIds };
