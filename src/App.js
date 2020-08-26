import React, { Component } from "react";
import Form from "react-bootstrap/Form";

let marked = require("marked");

class App extends Component {
  state = {
    markdown: "",
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
              <Form.Label column="lg" className="text-center font-weight-bold">
                Markdown Input
              </Form.Label>
              <Form.Control
                id="editor"
                as="textarea"
                placeholder="Enter Markdown"
                rows="3"
                value={markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div>
          <h1 className="text-center">Markdown Output</h1>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
