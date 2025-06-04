import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ThemeService } from './services/theme.service';
import { AsyncPipe } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, AsyncPipe, MarkdownModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  private themeService = inject(ThemeService);
  isDarkMode$ = this.themeService.isDarkMode$;
  protected title = 'Todo List';
}
