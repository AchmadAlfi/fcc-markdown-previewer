import React, { Component } from "react";
import Form from "react-bootstrap/Form";

let marked = require("marked");

class App extends Component {
  render() {
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
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
