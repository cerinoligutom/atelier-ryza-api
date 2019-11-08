import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

const FILE_NAME = 'FieldMixEnemy';

preprocessData(FILE_NAME, __dirname, data => data);

export const fieldMixEnemy = getProcessedData(FILE_NAME, __dirname);
