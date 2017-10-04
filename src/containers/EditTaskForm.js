import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/EditTaskForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state, { match }) => {
  const task = state.tasks[match.params.id];
  return { task, initialValues: task };
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
