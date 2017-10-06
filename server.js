import _ from 'lodash';
import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = new Express();

app.use(morgan('tiny'));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send('it works!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const id = _.uniqueId();
  const task = { ...req.body.task, id, state: 'active' };
  tasks = [...tasks, task];

  res.json(task);
});

app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex(t => t.id === id);
  const currentTask = tasks[index];
  const updatedTask = { ...currentTask, ...req.body.task };
  tasks[index] = updatedTask;
  res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(t => t.id !== id);
  res.status(204);
  res.end();
});

const port = 4000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
