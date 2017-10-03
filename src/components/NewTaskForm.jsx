import React from 'react'; // eslint-disable-line

export default class NewTaskForm extends React.Component {
  addTask = (e) => {
    e.preventDefault();
    this.props.addTask({ text: this.props.newTaskText });
  }
  updateNewTaskText = e => this.props.updateNewTaskText({ text: e.target.value })

  render() {
    const { newTaskText } = this.props;

    return <form action="" className="form-inline" onSubmit={this.addTask}>
      <div className="form-group mx-3">
        <input type="text" required
          value={newTaskText} onChange={this.updateNewTaskText} />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>;
  }
}
