import fs from 'fs';
import { xml2json } from './xml2json';

export const preprocessData = async <T, R>(fileName: string, filePath: string, cb: (jsonData: T) => R): Promise<R> => {
  return new Promise(async (resolve, reject) => {
    const jsonData = await xml2json<T>(fileName, filePath);
    const processedData = cb(jsonData);

    const FILE_PATH = `${filePath}/${fileName}.processed.json`;
    fs.writeFile(FILE_PATH, JSON.stringify(processedData, null, 2), err => {
      if (err) {
        console.error(`Error writing "${FILE_PATH}"`);
        reject(err);
        return;
      }

      resolve(processedData);
    });
  });
};
