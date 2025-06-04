import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { TodoDetailModalComponent } from '../todo-detail-modal/todo-detail-modal.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, TodoDetailModalComponent],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.scss'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() isDarkMode = false;
  @Output() delete = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();

  showDetailModal = false;

  onDelete() {
    this.delete.emit(this.todo.id);
  }

  onToggleComplete() {
    this.toggleComplete.emit(this.todo.id);
  }

  openDetailModal(event: MouseEvent) {
    // Prevent checkbox, delete button and drag handle clicks from opening the modal
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.classList.contains('delete-btn') ||
      target.classList.contains('drag-handle') ||
      target.closest('.drag-handle')
    ) {
      return;
    }
    this.showDetailModal = true;
  }
}
