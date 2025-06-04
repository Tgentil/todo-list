import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule],
  templateUrl: './todo-detail-modal.html',
  styleUrls: ['./todo-detail-modal.scss'],
})
export class TodoDetailModalComponent {
  @Input() todo!: Todo;
  @Input() isDarkMode = false;
  @Output() close = new EventEmitter<void>();

  newComment = '';
  isEditingDescription = false;
  editedDescription = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.editedDescription = this.todo.description;
  }

  onClose() {
    this.close.emit();
  }

  startEditingDescription() {
    this.isEditingDescription = true;
    this.editedDescription = this.todo.description;
  }

  saveDescription() {
    this.todoService.updateTodo(this.todo.id, {
      description: this.editedDescription,
    });
    this.isEditingDescription = false;
  }

  addComment() {
    if (this.newComment.trim()) {
      this.todoService.addComment(this.todo.id, this.newComment);
      this.newComment = '';
    }
  }
}
