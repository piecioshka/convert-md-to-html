const fs = require('fs');
const { buildHTML } = require('./html-helper');

describe('HTML Helper', () => {
  it('should build *.html file base on *.md file', () => {
    // 1. read file mock/example.md
    const markdownContent = fs.readFileSync('mock/example.md', 'utf8');
    // 2. buildHTML call
    const html = buildHTML(markdownContent);
    // 3. check content of generated file
    expect(html).toEqual(`<h1>main header</h1>
<pre><code class=\"js language-js\">const a = 2;
</code></pre>
<ul>
<li class=\"task-list-item\" style=\"list-style-type: none;\"><input type=\"checkbox\" disabled style=\"margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;\"> item 1</li>
<li class=\"task-list-item\" style=\"list-style-type: none;\"><input type=\"checkbox\" disabled style=\"margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;\" checked> item 2</li>
</ul>`);
  });
});
