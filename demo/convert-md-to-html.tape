Output demo/convert-md-to-html.gif

Require convert-md-to-html

Set Shell "bash"
Set Framerate 60
Set FontSize 12
Set Width 800
Set Height 400
Set Padding 20
Set Margin 5
Set MarginFill "#212830"
Set BorderRadius 10

Hide
Type 'cd /tmp/convert-md-to-html-demo && clear' Enter
Show

Type "convert-md-to-html --help" Sleep 200ms Enter
Wait Sleep 1500ms

Enter Enter Type "# convert a Markdown file to a standalone HTML file" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "cat sample.md" Sleep 200ms Enter
Wait Sleep 1200ms

Type "convert-md-to-html sample.md" Sleep 500ms Enter
Wait Sleep 1200ms

Type "ls *.html" Sleep 200ms Enter
Wait Sleep 1500ms

Sleep 3s
