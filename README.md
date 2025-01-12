# convert-md-to-html

[![node version](https://img.shields.io/node/v/convert-md-to-html.svg)](https://www.npmjs.com/package/convert-md-to-html)
[![npm version](https://badge.fury.io/js/convert-md-to-html.svg)](https://badge.fury.io/js/convert-md-to-html)
[![downloads count](https://img.shields.io/npm/dt/convert-md-to-html.svg)](https://www.npmjs.com/package/convert-md-to-html)
[![size](https://packagephobia.com/badge?p=convert-md-to-html)](https://packagephobia.com/result?p=convert-md-to-html)
[![license](https://img.shields.io/npm/l/convert-md-to-html.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/convert-md-to-html/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/convert-md-to-html/actions/workflows/testing.yml)

🔨 Convert Markdown file to HTML file

> Give a ⭐️ if this project helped you!

## Usage

```js
const { buildHTML } = require('convert-md-to-html');
const markdownText = `# title
- item 1
- item 2
`;
const html = buildHTML(markdownText);
console.log(html);
```

Output:

```html
<h1>title</h1>
<ul>
<li>item 1</li>
<li>item 2</li>
</ul>
```

## Installation

```bash
npm install -g convert-md-to-html
```

## CLI

```bash
convert-md-to-html README.md
# Created: README-2024-08-01-15-30-47.html
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](/issues/).

## Related

- [convert-md-to-pdf](https://github.com/piecioshka/convert-md-to-pdf) - 🔨 Convert Markdown file to PDF file

## Credits

Thanks to the authors of [showdown](https://github.com/showdownjs/showdown)

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2019
