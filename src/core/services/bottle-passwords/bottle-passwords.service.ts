import { qbFieldMixMap } from '@app/data';
import { OrderByDirection } from '@app/core/enums';

function getByPassword(password: string, levelLimit: number = 100) {
  return qbFieldMixMap
    .like('password', password)
    .lessThan('level', levelLimit + 1)
    .orderBy('level', OrderByDirection.DESC)
    .exec();
}

export const bottlePasswordsService = {
  getByPassword,
};
