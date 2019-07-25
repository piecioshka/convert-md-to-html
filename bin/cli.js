#!/usr/bin/env node

'use strict';

const fs = require('fs');
const showdown = require('showdown');

const filename = process.argv[2];
const options = {
    noHeaderId: true,
    simplifiedAutoLink: true,
    excludeTrailingPunctuationFromURLs: true,
    strikethrough: true,
    tables: true,
    ghCodeBlocks: true,
    tasklists: true,
    simpleLineBreaks: true,
    ghMentions: true,
    emoji: true
};
const converter = new showdown.Converter(options);
const buffer = fs.readFileSync(filename, 'utf-8');
const text = buffer.toString();
const html = converter.makeHtml(text);

console.log(html);
