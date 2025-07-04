#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

// Needed because __dirname doesn't exist in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.green("🚀 Let's create your Prath App!\n"));

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "What is your project name?",
    default: "my-prath-app",
  },
]);

const folderPath = path.join(process.cwd(), answers.projectName);
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  fs.writeFileSync(
    path.join(folderPath, "index.js"),
    `console.log("Welcome to ${answers.projectName} 🎉");`
  );
  console.log(chalk.blue(`\n✅ Created folder: ${answers.projectName}`));
  console.log(chalk.magenta("🚀 Run it with:"));
  console.log(chalk.yellow(`cd ${answers.projectName} && node index.js`));
} else {
  console.log(chalk.red("⚠️ Folder already exists!"));
}
