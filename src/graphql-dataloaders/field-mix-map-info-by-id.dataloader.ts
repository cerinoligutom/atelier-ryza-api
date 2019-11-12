import DataLoader from 'dataloader';
import { fieldMixMapInfoService } from '@app/core/services';

export const fieldMixMapInfoByIdLoader = () => {
  return new DataLoader(async (ids: string[]) => {
    const results = fieldMixMapInfoService.getByIds(ids);

    return ids.map(id => results.find(result => result.no === id) || null);
  });
};
