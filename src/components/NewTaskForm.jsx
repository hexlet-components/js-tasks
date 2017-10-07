import React from 'react'; // eslint-disable-line
import { Field, reduxForm } from 'redux-form'; // eslint-disable-line
import cn from 'classnames'; // eslint-disable-line

// BEGIN
class NewTaskForm extends React.Component {
  addTask = (values) => {
    this.props.addTask(values);
    this.props.reset();
  }

  render() {
    const submitClasses = cn({
      'btn btn-primary btn-sm': true,
      disabled: this.props.taskCreatingState === 'requested',
    });

    return <form action="" className="form-inline" onSubmit={this.props.handleSubmit(this.addTask)}>
      <div className="form-group mx-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <button type="submit" className={submitClasses}>Add</button>
    </form>;
  }
}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm);
// END
