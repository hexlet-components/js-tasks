import axios from 'axios';
import _ from 'lodash'; // eslint-disable-line
import { createAction } from 'redux-actions'; // eslint-disable-line

import routes from '../routes';

// BEGIN
// export const addTask = createAction('TASK_ADD', task =>
//   ({ task: { ...task, state: 'active', id: _.uniqueId() } }));
export const requestAddTask = createAction('TASK_ADD_REQUEST');
export const successAddTask = createAction('TASK_ADD_SUCCESS');
export const failureAddTask = createAction('TASK_ADD_FAILURE');

export const requestRemoveTask = createAction('TASK_REMOVE_REQUEST');
export const successRemoveTask = createAction('TASK_REMOVE_SUCCESS');
export const failureRemoveTask = createAction('TASK_REMOVE_FAILURE');

export const editTask = createAction('TASK_EDIT');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');

export const addTask = task => async (dispatch) => {
  dispatch(requestAddTask());
  try {
    const response = await axios.post(routes.tasksUrl(), { task });
    dispatch(successAddTask({ task: response.data }));
  } catch (e) {
    dispatch(failureAddTask());
  }
};

export const removeTask = task => async (dispatch) => {
  dispatch(requestRemoveTask({ id: task.id }));
  try {
    await axios.delete(routes.taskUrl(task.id));
    dispatch(successRemoveTask({ task }));
  } catch (e) {
    dispatch(failureRemoveTask({ task }));
  }
};

// END
