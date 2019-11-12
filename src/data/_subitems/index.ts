// https://docs.google.com/spreadsheets/d/11kUPrcjhh99UL2nyZmfzzsISF67ZKmhdCaslAFkIHVA
// Credits to Serity and Aeris for the hardwork

import fs from 'fs';
import { RepositoryQB } from '../_common/query-builder';

interface ISubItemRaw {
  level: string;
  areaName: string;
  password: string;
  id: string;
  name: string;
}

const FILE_NAME = 'subitems';

const rawJsonString = fs.readFileSync(`${__dirname}/${FILE_NAME}.json`, 'utf8');
const subItems: ISubItemRaw[] = JSON.parse(rawJsonString);
export const qbSubitems = new RepositoryQB(subItems);
