import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';
import { RepositoryQB } from '../_common/query-builder';

interface IFieldMixMapXML {
  Root: {
    FieldMixMap: Array<{
      $: {
        No: string;
        l: string; // level
        g: string; // gold/cole cost
        p: string; // password
        i: string; // info (entry in FieldMixMapInfo)
        c: string; // [not used] category (entry in FieldMixCategory)
        s: string; // subitem
      };
    }>;
  };
}

interface IFieldMixMap {
  no: string;
  level: number;
  cost: number;
  password: string;
  fieldMixMapInfoNo: string;
  subItemId: string;
}

const FILE_NAME = 'FieldMixMap';

export const preprocessFieldMixMap = async () => {
  return preprocessData<IFieldMixMapXML, IFieldMixMap[]>(FILE_NAME, __dirname, data =>
    data.Root.FieldMixMap.map(x => {
      const { No, l, g, p, i, s } = x.$;
      const processedData: IFieldMixMap = {
        no: No,
        level: +l,
        cost: +g,
        password: p,
        fieldMixMapInfoNo: i,
        subItemId: s,
      };

      return processedData;
    }),
  );
};

const fieldMixMap = getProcessedData<IFieldMixMap[]>(FILE_NAME, __dirname);
export const qbFieldMixMap = new RepositoryQB<IFieldMixMap>(fieldMixMap);
