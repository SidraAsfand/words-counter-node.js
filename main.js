#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("WORDS COUNT"));
console.log(chalk.bgRed("*".repeat(50)));
let sentence;
let answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: chalk.magentaBright("Write the sentence"),
});
let words = answer.sentence.trim().split(" ");
console.log(chalk.red("*".repeat(50)));
console.log(chalk.gray.bold("SENTENCE WORDS"));
console.log(words);
console.log(chalk.yellow("WORDS COUNT"));
console.log(`${words.length}`);
