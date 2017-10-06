const host = 'http://localhost:4000';
export default {
  tasksUrl: () => [host, 'tasks'].join('/'),
  taskUrl: id => [host, 'tasks', id].join('/'),
};
