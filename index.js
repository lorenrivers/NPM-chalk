import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

console.log(chalk.magenta("HELLOOOOOOOOO"));

console.log(
  chalk.green.overline("Is this ") +
    chalk.underline.bgYellowBright("working") +
    chalk.italic("?!?!")
);
