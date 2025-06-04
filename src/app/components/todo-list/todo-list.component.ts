import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';
import { ThemeService } from '../../services/theme.service';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent, DragDropModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss'],
})
export class TodoListComponent {
  private todoService = inject(TodoService);
  private themeService = inject(ThemeService);

  todos$ = this.todoService.todos$;
  isDarkMode$ = this.themeService.isDarkMode$;
  newTodoTitle = '';

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  drop(event: CdkDragDrop<string[]>) {
    this.todoService.reorderTodos(event.previousIndex, event.currentIndex);
  }
}
