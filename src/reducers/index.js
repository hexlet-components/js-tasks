import _ from 'lodash'; // eslint-disable-line
import { combineReducers } from 'redux'; // eslint-disable-line
import { handleActions } from 'redux-actions'; // eslint-disable-line
import { reducer as formReducer } from 'redux-form'; // eslint-disable-line
import * as actions from '../actions'; // eslint-disable-line

// BEGIN
const tasks = handleActions({
  [actions.successAddTask](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
  [actions.editTask](state, { payload: { task } }) {
    const currentTask = state[task.id];
    return { ...state, [task.id]: { ...currentTask, ...task } };
  },
  [actions.successRemoveTask](state, { payload: { task } }) {
    console.log(state)
    return _.omit(state, task.id);
  },
  [actions.toggleTaskState](state, { payload: { id } }) {
    const task = state[id];
    const newState = task.state === 'active' ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return { ...state, [task.id]: updatedTask };
  },
}, {});

export default combineReducers({
  form: formReducer,
  tasks,
});
// END
