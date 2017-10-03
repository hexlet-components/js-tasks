import React from 'react'; // eslint-disable-line

const filters = [['all', 'all'], ['active', 'active'], ['finished', 'finished']];
const renderTask = ({ state, text }) => (state === 'finished' ? <s>{text}</s> : text);

export default class TasksList extends React.Component {
  state = { activeFilter: 'all' };

  removeTask = id => (e) => {
    e.preventDefault();
    this.props.removeTask({ id });
  }

  toggleTaskState = id => (e) => {
    e.preventDefault();
    this.props.toggleTaskState({ id });
  }

  applyFilter(state) {
    this.setState({ activeFilter: state });
  }

  renderTasks() {
    const rawTasks = this.props.tasks;
    const filter = this.state.activeFilter;
    const tasks = filter === 'all' ? rawTasks : rawTasks.filter(t => t.state === filter);

    return <ul className="list-group">
      {tasks.map(task =>
        <li key={task.id} className="list-group-item d-flex justify-content-end">
          <a href="#" onClick={this.toggleTaskState(task.id)}>-</a>
          <div className="mr-auto">{renderTask(task)}</div>
          <a href="#" onClick={this.removeTask(task.id)}>x</a>
        </li>,
      )}
    </ul>;
  }

  renderFilter([state, name]) {
    return this.state.activeFilter === state ?
      name : <a key={state} href="#" onClick={() => this.applyFilter(state)}>{name}</a>;
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return <div className="mt-3">
      {this.renderTasks()}
      <div className="col-8 mt-3 d-flex justify-content-around">
        {filters.map(filter => this.renderFilter(filter))}
      </div>
    </div>;
  }
}
