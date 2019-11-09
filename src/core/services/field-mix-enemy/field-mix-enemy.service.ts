import { qbFieldMixEnemy } from '@app/data';

function getByIds(ids: string[]) {
  return qbFieldMixEnemy.whereIn('no', ids).exec();
}

export const fieldMixEnemyService = { getByIds };
