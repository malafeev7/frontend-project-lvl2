#!/usr/bin/env node
/* eslint-disable import/extensions */
import program from 'commander';
import genDiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, { format }) => {
    // eslint-disable-next-line no-console
    console.log(genDiff(filepath1, filepath2, format));
  });
program.parse();
