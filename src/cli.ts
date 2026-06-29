import fs from 'fs';
import path from 'path';
import { buildHTML } from './html-helper';
import { buildOutputFilename } from './file-helper';

function usage(): void {
  console.log(`Usage: convert-md-to-html <path/to/file.md>

Options:
  --version, -v           Show version number
  --help, -h              Show help

Examples:
  convert-md-to-html doc.md`);
}

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

const text = fs.readFileSync(filename, 'utf-8');

const html = buildHTML(text);

const destination = path.join(path.dirname(filename));
const outputFilename = buildOutputFilename(filename);

try {
  fs.writeFileSync(path.join(destination, outputFilename), html);
  console.log('Created:', outputFilename);
} catch (error) {
  console.error('Error:', error);
}
