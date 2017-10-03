import React from 'react'; // eslint-disable-line
import NewTaskFormContainer from '../containers/NewTaskForm';
import TasksListContainer from '../containers/TasksList';

export default () => (
  <div className="col-5">
    <NewTaskFormContainer />
    <TasksListContainer />
  </div>
);
