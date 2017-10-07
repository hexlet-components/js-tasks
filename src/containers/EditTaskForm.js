import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/EditTaskForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = ({ tasks, taskUpdatingState }, { match }) => {
  const task = tasks[match.params.id];
  return { taskUpdatingState, task, initialValues: task };
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
