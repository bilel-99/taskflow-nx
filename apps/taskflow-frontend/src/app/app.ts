import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, CreateTaskDto } from '@taskflow/data-models';
import { TaskCardComponent } from '@taskflow/ui-components';
import { TaskService } from './services/task.service';

@Component({
  imports: [CommonModule, RouterModule, FormsModule, TaskCardComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'TaskFlow';
  tasks: Task[] = [];
  showForm = false;

  newTask: CreateTaskDto = {
    title: '',
    description: '',
    dueDate: new Date(),
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

  createTask(): void {
    if (this.newTask.title && this.newTask.description) {
      this.taskService.createTask(this.newTask).subscribe({
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
      dueDate: new Date(),
    };
  }

  get completedTasks(): Task[] {
    return this.tasks.filter((t) => t.completed);
  }

  get pendingTasks(): Task[] {
    return this.tasks.filter((t) => !t.completed);
  }
}
