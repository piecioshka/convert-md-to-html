import assert from 'assert';
import showdown from 'showdown';

// -----------------------------------------------------------------------------
const options: showdown.ConverterOptions = {
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

export function buildHTML(text: string): string {
  assert(typeof text === 'string', 'options.source is not a string');

  const converter = new showdown.Converter(options);
  return converter.makeHtml(text);
}
