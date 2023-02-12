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

export { printError, printSuccess, printHelp };
