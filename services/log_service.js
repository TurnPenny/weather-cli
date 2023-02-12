import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(` ERROR ${error}`));
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen(` SUCCESS ${msg}`));
};

const printHelp = () => {
  console.log(
    dedent(
      `${chalk.bgCyan(' HELP')}
        Without paramaters - just for weather output
        -c [CITY] set town
        -h help
        -t [API_KEY] save token
       `
    )
  );
};

const printWeather = (res) => {
  console.log(
    dedent`${chalk.bgYellow(' WEATHER ')} weather in city: ${res.name}
    ${chalk.bgCyan(` ${res.weather[0].description}`)}
    ${chalk.bgCyanBright('Temperature:')} ${res.main.temp} (feels like ${
      res.main.feels_like
    })
    ${chalk.bgGreenBright('Wind speed:')}  ${res.wind.speed}
    `
  );
};

export { printWeather, printError, printSuccess, printHelp };
