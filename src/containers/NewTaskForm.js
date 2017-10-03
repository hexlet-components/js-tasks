import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/NewTaskForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = { newTaskText: state.newTaskText };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
