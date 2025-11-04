import express from 'express';
import cors from 'cors';
import { Task, CreateTaskDto, UpdateTaskDto } from '@taskflow/data-models';
import { generateId } from '@taskflow/utils';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for tasks (simulating a database)
const tasks: Task[] = [
  {
    id: '1',
    title: 'Tâche exemple',
    description: "Ceci est une tâche d'exemple",
    dueDate: new Date('2025-11-10'),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// GET /api/tasks - Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// GET /api/tasks/:id - Get a single task by ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

// POST /api/tasks - Create a new task
app.post('/api/tasks', (req, res) => {
  const createTaskDto: CreateTaskDto = req.body;

  if (
    !createTaskDto.title ||
    !createTaskDto.description ||
    !createTaskDto.dueDate
  ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newTask: Task = {
    id: generateId(),
    title: createTaskDto.title,
    description: createTaskDto.description,
    dueDate: new Date(createTaskDto.dueDate),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Update a task
app.put('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const updateTaskDto: UpdateTaskDto = req.body;
  const existingTask = tasks[taskIndex];

  const updatedTask: Task = {
    ...existingTask,
    title: updateTaskDto.title ?? existingTask.title,
    description: updateTaskDto.description ?? existingTask.description,
    dueDate: updateTaskDto.dueDate
      ? new Date(updateTaskDto.dueDate)
      : existingTask.dueDate,
    completed: updateTaskDto.completed ?? existingTask.completed,
    updatedAt: new Date(),
  };

  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
});

// DELETE /api/tasks/:id - Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Root endpoint
app.get('/', (req, res) => {
  res.send({
    message: 'TaskFlow API',
    endpoints: [
      'GET /api/tasks',
      'GET /api/tasks/:id',
      'POST /api/tasks',
      'PUT /api/tasks/:id',
      'DELETE /api/tasks/:id',
    ],
  });
});

app.listen(port, host, () => {
  console.log(`[ ready ] TaskFlow API running at http://${host}:${port}`);
});
