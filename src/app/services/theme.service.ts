import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Verificar preferência salva ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    this.setDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }

  toggleTheme() {
    this.isDarkMode.next(!this.isDarkMode.value);
    localStorage.setItem('theme', this.isDarkMode.value ? 'dark' : 'light');
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode.next(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
