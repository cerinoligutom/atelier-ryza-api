import 'tsconfig-paths/register';
import {
  preprocessEnemyData,
  preprocessFieldMixCat,
  preprocessFieldMixEnemy,
  preprocessFieldMixMap,
  preprocessFieldMixMapInfo,
  preprocessStrFieldMixMap,
  preprocessStrMonsterName,
  preprocessFieldMixMapItems,
} from '@app/data';

const start = async () => {
  await Promise.all([
    preprocessEnemyData(),
    preprocessFieldMixCat(),
    preprocessFieldMixEnemy(),
    preprocessFieldMixMap(),
    preprocessFieldMixMapInfo(),
    preprocessStrFieldMixMap(),
    preprocessStrMonsterName(),
    preprocessFieldMixMapItems(),
  ]);

  console.info('Preprocessing successful');
};
start();
