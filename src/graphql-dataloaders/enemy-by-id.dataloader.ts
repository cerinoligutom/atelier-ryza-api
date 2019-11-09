import DataLoader from 'dataloader';
import { enemyService } from '@app/core/services';

export const enemyByIdLoader = () => {
  return new DataLoader(async (ids: string[]) => {
    const results = enemyService.getByIds(ids);

    return ids.map(id => results.find(result => result.monsterTag === id) || null);
  });
};
