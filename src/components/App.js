import React, { Component } from "react";
import Form from "./Form";
import NewForm from "./NewForm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dev Managed form</h1>
        <Form />
        <br />
        <h1>Redux Managed Form</h1>
        <NewForm />
      </div>
    );
  }
}

export default App;
