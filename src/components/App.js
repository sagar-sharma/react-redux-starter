import React, { Component } from "react";
import Form from "./Form";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
