'use strict';

const assert = require('assert');
const showdown = require('showdown');

// -----------------------------------------------------------------------------
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
  emoji: true,
};

function buildHTML(text) {
  assert(typeof text === 'string', 'options.source is not a string');

  const converter = new showdown.Converter(options);
  return converter.makeHtml(text);
}

module.exports = { buildHTML };
