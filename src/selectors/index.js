import { createSelector } from 'reselect'; // eslint-disable-line

export const getTasks = state => state.tasks;
export const tasksSelector = createSelector(
  getTasks,
  tasks => Object.values(tasks),
);
