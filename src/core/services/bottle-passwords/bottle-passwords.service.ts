import { qbFieldMixMap } from '@app/data';
import { OrderByDirection } from '@app/core/enums';

function getByPassword(password: string) {
  return qbFieldMixMap
    .like('password', password)
    .orderBy('level', OrderByDirection.DESC)
    .exec();
}

export const bottlePasswordsService = {
  getByPassword,
};
