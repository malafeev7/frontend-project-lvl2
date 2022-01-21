#!/usr/bin/env node
import program from "commander";

program
  .description("Compares two configuration files and shows a difference.")
  .version("0.1.0", "-V, --version", "output the version number")
  .option("-f, --format [type]", "Output format");

program.parse(process.argv);
