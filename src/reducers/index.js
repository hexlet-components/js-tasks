import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const taskCreatingState = handleActions({
  [actions.addTaskRequest]() {
    return 'requested';
  },
  [actions.addTaskFailure]() {
    return 'failed';
  },
  [actions.addTaskSuccess]() {
    return 'successed';
  },
}, 'none');

const taskUpdatingState = handleActions({
  [actions.updateTaskRequest]() {
    return 'requested';
  },
  [actions.updateTaskFailure]() {
    return 'failed';
  },
  [actions.updateTaskSuccess]() {
    return 'successed';
  },
}, 'none');

const tasks = handleActions({
  [actions.addTaskSuccess](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
  [actions.removeTaskSuccess](state, { payload: { task } }) {
    return _.omit(state, task.id);
  },
  [actions.updateTaskSuccess](state, { payload: { task } }) {
    const oldTask = state[task.id];
    const updatedTask = { ...oldTask, ...task };
    return { ...state, [task.id]: updatedTask };
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
  taskCreatingState,
  taskUpdatingState,
  tasks,
});
