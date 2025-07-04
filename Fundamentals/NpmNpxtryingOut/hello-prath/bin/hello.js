#!/usr/bin/env node

import chalk from 'chalk';
import ora from 'ora';
import figlet from 'figlet';
import gradient from 'gradient-string';

// 1. Banner
console.log(
  gradient.rainbow(
    figlet.textSync("Hello Prath!", {
      horizontalLayout: 'default',
      verticalLayout: 'default',
    })
  )
);

// 2. Spinner
const spinner = ora(chalk.cyan('Launching your CLI...')).start();

setTimeout(() => {
  spinner.succeed(chalk.green('Ready to rock 🤘'));

  // 3. Final message
  console.log(chalk.bold.yellow('Welcome to the Prath CLI 🌟'));
  console.log(chalk.blue('Stay awesome and keep building 🔧✨'));
}, 1500);
