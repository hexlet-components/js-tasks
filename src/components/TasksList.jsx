import React from 'react'; // eslint-disable-line
import { Link } from 'react-router-dom'; // eslint-disable-line

const filters = [['all', 'all'], ['active', 'active'], ['finished', 'finished']];

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
      {tasks.map(({ id, text, state }) =>
        <li key={id} className="list-group-item d-flex justify-content-end">
          <a href="#" className="mr-3" onClick={this.toggleTaskState(id)}>-</a>
          <div className="mr-auto">{(state === 'finished' ? <s>{text}</s> : <Link to={`/tasks/${id}`}>{text}</Link>)}</div>
          <a href="#" onClick={this.removeTask(id)}>x</a>
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
