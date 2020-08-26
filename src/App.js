import React, { Component } from "react";
import Form from "react-bootstrap/Form";

let marked = require("marked");
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  state = {
    markdown: placeholder,
  };
  updateMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App px-2">
        <div>
          <Form>
            <Form.Group controlId="formControlsTextarea">
              <Form.Label
                column="lg"
                className="text-center bg-primary text-white"
              >
                <h1>Markdown Input</h1>
              </Form.Label>
              <Form.Control
                id="editor"
                as="textarea"
                placeholder="Enter Markdown"
                rows="10"
                value={markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div>
          <h1 className="text-center bg-success text-white py-3">
            Markdown Output
          </h1>
          <div
            id="preview"
            className="border border-success px-5"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
