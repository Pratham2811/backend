#!/usr/bin/env node


import figlet from 'figlet';
import chalk from 'chalk';
import gradient from 'gradient-string';

// Read text from command line argument
const inputText = process.argv.slice(2).join(" ") || "Prathify";

figlet(inputText, (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }

  console.log(gradient.rainbow(data));
  console.log(chalk.yellow.bold("✨ Made with love by Prath ✨"));
});
