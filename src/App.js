import React, { Component } from "react";
import Form from "react-bootstrap/Form";

let marked = require("marked");

class App extends Component {
  state = {
    markdown: "",
  };

  render() {
    let { markdown } = this.state;
    return (
      <div className="App px-2">
        <div>
          <Form>
            <Form.Group controlId="formControlsTextarea">
              <Form.Label column="lg" className="text-center font-weight-bold">
                Markdown Input
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Markdown"
                rows="3"
                value={markdown}
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
