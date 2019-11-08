import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

const FILE_NAME = 'FieldMixMapInfo';

preprocessData(FILE_NAME, __dirname, data => data);

export const fieldMixMapInfo = getProcessedData(FILE_NAME, __dirname);
