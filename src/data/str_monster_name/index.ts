import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

const FILE_NAME = 'str_monster_name';

preprocessData(FILE_NAME, __dirname, data => data);

export const strMonsterName = getProcessedData(FILE_NAME, __dirname);
