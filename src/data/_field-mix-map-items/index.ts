import { MAP_SUFFIXES } from './map-suffixes';
import { NAME_FIXES } from './name-fixes';
import { writeProcessedData } from '../_common/writeProcessedData';
import { getProcessedData } from '../_common/getProcessedData';
import { RepositoryQB } from '../_common/query-builder';
import { subItems } from './subitems';

interface IFieldMixMapItem {
  primaryItem: string;
  secondaryItem: string;
  subItemId: string;
}

const FILE_NAME = 'field-mix-map-items';

export const preprocessFieldMixMapItems = () => {
  const processedData: IFieldMixMapItem[] = subItems.map(rawSubItem => {
    const { areaName } = rawSubItem;

    // Apparently, the "areaName" value contains both the item and map type.
    // We'll have to split this, the pattern is consistent with "Primary Item" + "Map Type".
    // A list of suffixes (map type) is hard-coded to aid with this.

    // Handle primaryItemName
    let primaryItemName = areaName;
    for (const suffix of MAP_SUFFIXES) {
      if (primaryItemName.endsWith(suffix)) {
        primaryItemName = primaryItemName.replace(suffix, '').trim();
        break;
      }
    }
    primaryItemName = NAME_FIXES[primaryItemName] ? NAME_FIXES[primaryItemName] : primaryItemName;

    const fieldMixMapItem: IFieldMixMapItem = {
      primaryItem: primaryItemName,
      secondaryItem: rawSubItem.name,
      subItemId: rawSubItem.id,
    };

    return fieldMixMapItem;
  });

  return writeProcessedData(FILE_NAME, __dirname, processedData);
};

const fieldMixMapItems = getProcessedData<IFieldMixMapItem[]>(FILE_NAME, __dirname);
export const qbFieldMixMapItems = new RepositoryQB<IFieldMixMapItem>(fieldMixMapItems);
