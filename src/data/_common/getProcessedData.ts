import fs from 'fs';

// This is expected to error if the file doesn't exist. It shouldn't happen as the file should've been available already upon preprocessing.
export const getProcessedData = <T>(fileName: string, filePath: string): T => {
  const data = fs.readFileSync(`${filePath}/${fileName}.processed.json`, 'utf8');
  return JSON.parse(data);
};
