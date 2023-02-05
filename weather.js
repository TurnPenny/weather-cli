import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log_service.js';
import { saveToken } from './services/storage.service.js';

const saveTokenHandler = async (token) => {
  try {
    await saveToken('token', token);
    printSuccess('token is saved');
  } catch (error) {
    printError(error.message);
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSuccess();
  }
  if (args.t) {
    return saveTokenHandler(args.t);
  }
};

initCli();
