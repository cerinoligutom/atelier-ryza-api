import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';

interface IFieldMixEnemyXML {
  Root: {
    FieldMixEnemy: Array<{
      $: {
        No: string;
        enemySymbolTag: string;
        encountGroupTag: string;
      };
    }>;
  };
}

interface IFieldMixEnemy {
  no: string;
  enemySymbolTag: string;
  encounterGroupTag: string;
}

const FILE_NAME = 'FieldMixEnemy';

preprocessData<IFieldMixEnemyXML, IFieldMixEnemy[]>(FILE_NAME, __dirname, data =>
  data.Root.FieldMixEnemy.map(x => {
    const { No, encountGroupTag, enemySymbolTag } = x.$;

    const processedData: IFieldMixEnemy = {
      enemySymbolTag,
      no: No,
      encounterGroupTag: encountGroupTag,
    };

    return processedData;
  }),
);

export const fieldMixEnemy = getProcessedData(FILE_NAME, __dirname);
