import axios from 'axios';
import _ from 'lodash'; // eslint-disable-line
import { createAction } from 'redux-actions'; // eslint-disable-line

import routes from '../routes';

// BEGIN
// export const addTask = createAction('TASK_ADD', task =>
//   ({ task: { ...task, state: 'active', id: _.uniqueId() } }));
export const addTaskRequest = createAction('TASK_ADD_REQUEST');
export const addTaskSuccess = createAction('TASK_ADD_SUCCESS');
export const addTaskFailure = createAction('TASK_ADD_FAILURE');

export const removeTaskRequest = createAction('TASK_REMOVE_REQUEST');
export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS');
export const removeTaskFailure = createAction('TASK_REMOVE_FAILURE');

export const updateTaskRequest = createAction('TASK_UPDATE_REQUEST');
export const updateTaskSuccess = createAction('TASK_UPDATE_SUCCESS');
export const updateTaskFailure = createAction('TASK_UPDATE_FAILURE');

export const editTask = createAction('TASK_EDIT');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');

export const addTask = task => async (dispatch) => {
  dispatch(addTaskRequest());
  try {
    const response = await axios.post(routes.tasksUrl(), { task });
    dispatch(addTaskSuccess({ task: response.data }));
  } catch (e) {
    dispatch(addTaskFailure());
  }
};

export const removeTask = task => async (dispatch) => {
  dispatch(removeTaskRequest({ id: task.id }));
  try {
    await axios.delete(routes.taskUrl(task.id));
    dispatch(removeTaskSuccess({ task }));
  } catch (e) {
    dispatch(removeTaskFailure({ task }));
  }
};

export const updateTask = task => async (dispatch) => {
  dispatch(updateTaskRequest({ id: task.id }));
  try {
    await axios.patch(routes.taskUrl(task.id), { task });
    dispatch(updateTaskSuccess({ task }));
  } catch (e) {
    dispatch(updateTaskFailure({ task }));
  }
};
// END
