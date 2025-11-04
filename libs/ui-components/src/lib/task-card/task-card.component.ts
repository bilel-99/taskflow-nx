import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Task } from '@taskflow/data-models';
import { formatDate, isPastDue } from '@taskflow/utils';

@Component({
  selector: 'lib-task-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<Task>();
  toggleComplete = output<string>();
  deleteTask = output<string>();
  editTask = output<Task>();

  formatDate(date: Date): string {
    return formatDate(date);
  }

  isPastDue(date: Date): boolean {
    return isPastDue(date);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.task().id);
  }

  onDelete(): void {
    this.deleteTask.emit(this.task().id);
  }

  onEdit(): void {
    this.editTask.emit(this.task());
  }
}
