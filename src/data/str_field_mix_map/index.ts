import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

const FILE_NAME = 'str_field_mix_map';

preprocessData(FILE_NAME, __dirname, data => data);

export const strFieldMixMap = getProcessedData(FILE_NAME, __dirname);
