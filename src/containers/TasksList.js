import { connect } from 'react-redux'; // eslint-disable-line
import Component from '../components/TasksList.jsx';
import * as actionCreators from '../actions';
import { tasksSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: tasksSelector(state),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
