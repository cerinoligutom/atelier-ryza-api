import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

interface IFieldMixCatXML {
  Root: {
    FieldMixCat: Array<{
      $: {
        No: string;
        category: string;
      };
    }>;
  };
}

interface IFieldMixCat {
  no: string;
  category: string;
}

const FILE_NAME = 'FieldMixCat';

preprocessData<IFieldMixCatXML, IFieldMixCat[]>(FILE_NAME, __dirname, data =>
  data.Root.FieldMixCat.map(x => {
    const { No, category } = x.$;

    const processedData: IFieldMixCat = {
      category,
      no: No,
    };

    return processedData;
  }),
);

export const fieldMixCat = getProcessedData<IFieldMixCat[]>(FILE_NAME, __dirname);
