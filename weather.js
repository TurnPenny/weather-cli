import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log_service.js';

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
};

initCli();
