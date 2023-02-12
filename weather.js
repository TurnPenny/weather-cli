import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api_service.js';
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from './services/log_service.js';
import {
  getToken,
  saveCity,
  saveToken,
  TOKEN_DICTIONARY,
} from './services/storage.service.js';

const saveTokenHandler = async (token) => {
  if (!token.length) {
    printError('The token has not been passed');
    return;
  }
  try {
    await saveToken(TOKEN_DICTIONARY.token, token);
    printSuccess('token is saved');
  } catch (e) {
    printError(e.message);
  }
};

const saveCityHandler = async (city) => {
  if (!city.length) {
    printError('The city has not been passed');
    return;
  }
  try {
    await saveCity(TOKEN_DICTIONARY.city, city);
    printSuccess('city is saved');
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = await getToken(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (e) {
    if (e?.process?.statuc == 404) {
      printError('wrong city name');
    } else if (e?.process?.status == 401) {
      printError('wrong token');
    } else {
      printError(e.message);
    }
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    return saveCityHandler(args.s);
  }
  if (args.t) {
    return saveTokenHandler(args.t);
  }
  getForecast();
};

initCli();
