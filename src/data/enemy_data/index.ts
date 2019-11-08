import { preprocessData } from '../_common/preprocessData';
import { getProcessedData } from '../_common/getProcessedData';
import { RepositoryQB } from '../_common/query-builder';

interface IEnemyDataXML {
  Root: {
    enemy_data: Array<{
      $: {
        name_id: 'STR_MONSTER_NAME_000';
        library_rank_00: string;
        library_rank_01: string;
        library_rank_02: string;
        library_rank_03: string;
        monster_tag: string;
        chara_tag: string;
        race_tag: string;
        size: string;
        division: string;
        common: string;
        charge: string;
      };
    }>;
  };
}

interface IEnemyData {
  nameId: string;
  monsterTag: string;
  characterTag: string;
  raceTag: string;
}

const FILE_NAME = 'enemy_data';

export const preprocessEnemyData = async () => {
  return preprocessData<IEnemyDataXML, IEnemyData[]>(FILE_NAME, __dirname, data =>
    data.Root.enemy_data.map(x => {
      const { name_id, monster_tag, chara_tag, race_tag } = x.$;

      const processedData: IEnemyData = {
        nameId: name_id,
        monsterTag: monster_tag,
        characterTag: chara_tag,
        raceTag: race_tag,
      };

      return processedData;
    }),
  );
};

const enemyData = getProcessedData<IEnemyData[]>(FILE_NAME, __dirname);
export const qbEnemyData = new RepositoryQB<IEnemyData>(enemyData);
