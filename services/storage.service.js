import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const saveToken = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    console.log(JSON.parse(file));
    data = JSON.parse(file);
  }
  console.log(data);

  data[key] = value;
  console.log(filePath);
  await promises.writeFile(filePath, JSON.stringify(data));
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};

export { saveToken };