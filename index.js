// const color = require('colors')
// console.log("Package.json".blue);
// console.log("Package.json".rainbow);

import colors from 'colors';
console.log(colors.blue("Package.json"));
console.log(colors.rainbow("Package.json"));

// import statement for latest versinof nodejs
// in package.json =>
// {
//     "type": "module",
// }
// then use below code same for colors

import chalk from 'chalk';
console.log(chalk.blue('Hello world!'))
console.log(chalk.underline.bgYellow('Hello world!'))