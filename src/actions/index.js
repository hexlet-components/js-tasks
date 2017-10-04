import _ from 'lodash'; // eslint-disable-line
import { createAction } from 'redux-actions'; // eslint-disable-line

// BEGIN
export const addTask = createAction('TASK_ADD', task =>
  ({ task: { ...task, state: 'active', id: _.uniqueId() } }));
export const removeTask = createAction('TASK_REMOVE');
export const editTask = createAction('TASK_EDIT');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');
// END
