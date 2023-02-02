import { bgRed, bgGreen } from 'chalk';

const printError = error => {
  console.log(bgRed(` ERROR ${error}`));
};

const printSuccess = msg => {
  console.log(bgGreen(` SUCCESS ${msg}`));
};

export { printError, printSuccess };
