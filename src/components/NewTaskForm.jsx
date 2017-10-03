import React from 'react'; // eslint-disable-line
import { Field, reduxForm } from 'redux-form'; // eslint-disable-line

class NewTaskForm extends React.Component {
  addTask = (values) => {
    this.props.addTask(values);
    this.props.reset();
  }

  render() {
    return <form action="" className="form-inline" onSubmit={this.props.handleSubmit(this.addTask)}>
      <div className="form-group mx-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>;
  }
}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm);
