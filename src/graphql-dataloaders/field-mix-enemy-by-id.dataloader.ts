import DataLoader from 'dataloader';
import { fieldMixEnemyService } from '@app/core/services';

export const fieldMixEnemyByIdLoader = () => {
  return new DataLoader(async (ids: string[]) => {
    const results = fieldMixEnemyService.getByIds(ids);

    return ids.map(id => results.find(result => result.no === id) || null);
  });
};
