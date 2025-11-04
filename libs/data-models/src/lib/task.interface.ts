export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  dueDate: Date;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  dueDate?: Date;
  completed?: boolean;
}
