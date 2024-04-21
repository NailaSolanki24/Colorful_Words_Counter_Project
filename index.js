#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.cyanBright("\n\tWelcome to Naila Solanki - Word Counter Project\n"));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellowBright("Enter a Sentence"),
    },
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold(" - Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
