import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

const FILE_NAME = 'FieldMixCat';

preprocessData(FILE_NAME, __dirname, data => data);

export const fieldMixCat = getProcessedData(FILE_NAME, __dirname);
