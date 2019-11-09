import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';
import { RepositoryQB } from '../_common/query-builder';

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
  mapName: string;
}

const FILE_NAME = 'str_field_mix_map';

export const preprocessStrFieldMixMap = async () => {
  return preprocessData<IStrFieldMixMapXML, IStrFieldMixMap[]>(FILE_NAME, __dirname, data =>
    data.Root.str.map(x => {
      const { String_No, Text } = x.$;

      // Handle mapName
      let mapName = Text;
      mapName = mapName.replace('^00', ''); // Remove ^00
      mapName = mapName.endsWith('Ravin') ? mapName.replace('Ravin', 'Ravine') : mapName;

      const processedData: IStrFieldMixMap = {
        mapName,
        no: String_No,
      };

      return processedData;
    }),
  );
};

const strFieldMixMap = getProcessedData<IStrFieldMixMap[]>(FILE_NAME, __dirname);
export const qbStrFieldMixMap = new RepositoryQB<IStrFieldMixMap>(strFieldMixMap);
