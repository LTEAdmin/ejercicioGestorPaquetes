// para usar chalk con requiere se debe tener una version menor a 4.19 del chalk
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bgBlue.bold('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red.inverse('Hello world!'));
console.log(chalk.green('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));