import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class NewForm extends Component {
  render() {
    const {
      error,
      handleSubmit,
      pristine,
      reset,
      submitting,
      values
    } = this.props;

    function showResults(values) {
      alert(JSON.stringify(values));
    }
    return (
      <div>
        <form onSubmit={handleSubmit(showResults)}>
          <label>User Name</label>
          <Field name="username" component="input" />
          <label>Password</label>
          <Field name="password" component="input" type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "auth"
})(NewForm);
