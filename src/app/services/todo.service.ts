import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = new BehaviorSubject<Todo[]>(this.loadTodos());
  todos$ = this.todos.asObservable();

  private loadTodos(): Todo[] {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  }

  private saveTodos(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.todos.next(todos);
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      description: '',
      comments: [],
    };
    this.saveTodos([...this.todos.value, newTodo]);
  }

  updateTodo(id: number, updates: Partial<Todo>) {
    this.saveTodos(
      this.todos.value.map((todo) =>
        todo.id === id ? { ...todo, ...updates } : todo
      )
    );
  }

  deleteTodo(id: number) {
    this.saveTodos(this.todos.value.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: number) {
    this.saveTodos(
      this.todos.value.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  addComment(todoId: number, text: string) {
    const todos = this.todos.value.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          comments: [
            ...todo.comments,
            {
              id: Date.now(),
              text,
              createdAt: new Date(),
            },
          ],
        };
      }
      return todo;
    });
    this.saveTodos(todos);
  }

  reorderTodos(fromIndex: number, toIndex: number) {
    const newTodos = [...this.todos.value];
    const [removed] = newTodos.splice(fromIndex, 1);
    newTodos.splice(toIndex, 0, removed);
    this.saveTodos(newTodos);
  }
}
