import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, CreateTaskDto, UpdateTaskDto } from '@taskflow/data-models';
import { TaskCardComponent } from '@taskflow/ui-components';
import { TaskService } from './services/task.service';

@Component({
  imports: [CommonModule, RouterModule, FormsModule, TaskCardComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'TaskFlow';
  tasks: Task[] = [];
  showForm = false;
  isEditMode = false;
  editingTaskId: string | null = null;
  filterStatus: 'all' | 'pending' | 'completed' = 'all';

  newTask: { title: string; description: string; dueDate: string | Date } = {
    title: '',
    description: '',
    dueDate: this.getDefaultDate(),
  };

  private readonly taskService = inject(TaskService);

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
      },
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  openEditForm(task: Task): void {
    this.isEditMode = true;
    this.editingTaskId = task.id;
    this.showForm = true;

    // Convertir la date au format YYYY-MM-DD pour l'input date
    const date = new Date(task.dueDate);
    const formattedDate = date.toISOString().split('T')[0];

    this.newTask = {
      title: task.title,
      description: task.description,
      dueDate: formattedDate,
    };
  }
  createTask(): void {
    if (this.newTask.title && this.newTask.description) {
      if (this.isEditMode && this.editingTaskId) {
        // Mode édition
        this.updateTask();
      } else {
        // Mode création
        const taskDto: CreateTaskDto = {
          title: this.newTask.title,
          description: this.newTask.description,
          dueDate: new Date(this.newTask.dueDate),
        };

        this.taskService.createTask(taskDto).subscribe({
          next: (task) => {
            this.tasks.push(task);
            this.resetForm();
            this.showForm = false;
          },
          error: (error) => {
            console.error('Error creating task:', error);
          },
        });
      }
    }
  }

  updateTask(): void {
    if (this.editingTaskId) {
      const updateDto: UpdateTaskDto = {
        title: this.newTask.title,
        description: this.newTask.description,
        dueDate: new Date(this.newTask.dueDate),
      };

      this.taskService.updateTask(this.editingTaskId, updateDto).subscribe({
        next: (updatedTask) => {
          const index = this.tasks.findIndex(
            (t) => t.id === this.editingTaskId
          );
          if (index !== -1) {
            this.tasks[index] = updatedTask;
          }
          this.resetForm();
          this.showForm = false;
        },
        error: (error) => {
          console.error('Error updating task:', error);
        },
      });
    }
  }

  toggleTaskCompletion(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      this.taskService.toggleTaskCompletion(taskId, !task.completed).subscribe({
        next: (updatedTask) => {
          const index = this.tasks.findIndex((t) => t.id === taskId);
          if (index !== -1) {
            this.tasks[index] = updatedTask;
          }
        },
        error: (error) => {
          console.error('Error toggling task:', error);
        },
      });
    }
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((t) => t.id !== taskId);
      },
      error: (error) => {
        console.error('Error deleting task:', error);
      },
    });
  }

  resetForm(): void {
    this.newTask = {
      title: '',
      description: '',
      dueDate: this.getDefaultDate(),
    };
    this.isEditMode = false;
    this.editingTaskId = null;
  }

  getDefaultDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  setFilter(status: 'all' | 'pending' | 'completed'): void {
    this.filterStatus = status;
  }

  get filteredTasks(): Task[] {
    switch (this.filterStatus) {
      case 'pending':
        return this.tasks.filter((t) => !t.completed);
      case 'completed':
        return this.tasks.filter((t) => t.completed);
      default:
        return this.tasks;
    }
  }

  get completedTasks(): Task[] {
    return this.tasks.filter((t) => t.completed);
  }

  get pendingTasks(): Task[] {
    return this.tasks.filter((t) => !t.completed);
  }
}
