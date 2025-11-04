import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '@taskflow/data-models';
import { formatDate, isPastDue } from '@taskflow/utils';

@Component({
  selector: 'lib-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<string>();
  @Output() deleteTask = new EventEmitter<string>();

  formatDate(date: Date): string {
    return formatDate(date);
  }

  isPastDue(date: Date): boolean {
    return isPastDue(date);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.task.id);
  }

  onDelete(): void {
    this.deleteTask.emit(this.task.id);
  }
}
