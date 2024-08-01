#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { buildHTML } = require('../src/html-helper');
const { buildOutputFilename } = require('../src/file-helper');

const filename = process.argv[2];

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
