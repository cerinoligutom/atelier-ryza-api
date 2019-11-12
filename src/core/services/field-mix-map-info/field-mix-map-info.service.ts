import { qbFieldMixMapInfo } from '@app/data';

function getByIds(fieldMixMapInfoIds: string[]) {
  return qbFieldMixMapInfo.whereIn('no', fieldMixMapInfoIds).exec();
}

export const fieldMixMapInfoService = { getByIds };
