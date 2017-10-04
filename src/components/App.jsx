import React from 'react'; // eslint-disable-line
import { Route } from 'react-router'; // eslint-disable-line
import NewTaskFormContainer from '../containers/NewTaskForm';
import TasksListContainer from '../containers/TasksList';
import EditTaskFormContainer from '../containers/EditTaskForm';

const tasks = () => <div>
  <NewTaskFormContainer />
  <TasksListContainer />
</div>;

export default () => (
  <div className="col-5">
    <Route exact path="/" component={tasks} />
    <Route exact path="/tasks/:id" component={EditTaskFormContainer} />
  </div>
);
