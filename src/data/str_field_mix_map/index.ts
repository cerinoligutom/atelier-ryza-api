import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

interface IStrFieldMixMapXML {
  Root: {
    str: Array<{
      $: {
        String_No: string;
        Text: string;
      };
    }>;
  };
}

interface IStrFieldMixMap {
  no: string;
  text: string;
}

const FILE_NAME = 'str_field_mix_map';

export const preprocessStrFieldMixMap = async () => {
  return preprocessData<IStrFieldMixMapXML, IStrFieldMixMap[]>(FILE_NAME, __dirname, data =>
    data.Root.str.map(x => {
      const { String_No, Text } = x.$;

      const processedData: IStrFieldMixMap = {
        no: String_No,
        text: Text,
      };

      return processedData;
    }),
  );
};

export const strFieldMixMap = getProcessedData<IStrFieldMixMap[]>(FILE_NAME, __dirname);
