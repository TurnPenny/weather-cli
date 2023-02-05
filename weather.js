import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log_service.js';
import { saveToken } from './services/storage.service.js';

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSuccess();
  }
  if (args.t) {
    saveToken('token', args.t);
  }
};

initCli();
