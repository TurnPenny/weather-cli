import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api_service.js';
import { printHelp, printError, printSuccess } from './services/log_service.js';
import { saveToken, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveTokenHandler = async (token) => {
  if (!token.length) {
    printError('The token has not been transferred');
    return;
  }
  try {
    await saveToken(TOKEN_DICTIONARY.token, token);
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
  getWeather('dnipro');
};

initCli();
