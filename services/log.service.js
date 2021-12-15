import chalk from "chalk";
import dedent from 'dedent-js';

const { bgRed, bgGreen, bgBlue } = chalk;

const printError = (error) => {
    console.log(bgRed(' ERROR ') + '' + error);
};

const printSuccess = (message) => {
    console.log(bgGreen(' SUCCESS ') + '' + message);
};

const printHelp = () => {
    console.log(
        dedent(`${bgBlue(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `)
    );
}

export { printSuccess, printError, printHelp };