import React from 'react'; // eslint-disable-line
import { Link } from 'react-router-dom'; // eslint-disable-line
import { Field, reduxForm } from 'redux-form'; // eslint-disable-line

// BEGIN
class EditTaskForm extends React.Component {
  editTask = (values) => {
    this.props.editTask({ task: { ...values, id: this.props.task.id } });
    this.props.history.push('/');
    // this.props.reset();
  }

  render() {
    return <form action="" className="form-inline" onSubmit={this.props.handleSubmit(this.editTask)}>
      <div className="form-group mx-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Edit</button>
      <Link to="/">Back</Link>
    </form>;
  }
}

export default reduxForm({
  form: 'editTask',
})(EditTaskForm);
// END
