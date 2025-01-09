#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { buildHTML } = require('../src/html-helper');
const { buildOutputFilename } = require('../src/file-helper');

const filename = process.argv[2];

if (filename === '--help' || filename === '-h') {
  usage();
  process.exit(0);
} else if (filename === '--version' || filename === '-v') {
  console.log(require('../package.json').version);
  process.exit(0);
} else if (!filename) {
  usage();
  process.exit(1);
}

function usage() {
  console.log(`Usage: convert-md-to-html <path/to/file.md>

Options:
  --version, -v           Show version number
  --help, -h              Show help

Examples:
  convert-md-to-html doc.md`);
}

const buffer = fs.readFileSync(filename, 'utf-8');
const text = buffer.toString();

const html = buildHTML(text);

const destination = path.join(path.dirname(filename));
const outputFilename = buildOutputFilename(filename);

try {
  fs.writeFileSync(path.join(destination, outputFilename), html);
  console.log('Created:', outputFilename);
} catch (error) {
  console.error('Error:', error);
}
