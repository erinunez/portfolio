import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.next(savedTheme === 'dark');
      this.setTheme(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.next(prefersDark);
      this.setTheme(prefersDark);
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkMode.value;
    this.isDarkMode.next(newTheme);
    this.setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }

  private setTheme(isDark: boolean) {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--background-dark', '#1a1a1a');
      root.style.setProperty('--background-light', '#2d2d2d');
      root.style.setProperty('--text-light', '#ffffff');
      root.style.setProperty('--text-dark', '#e0e0e0');
      root.style.setProperty('--primary-color', '#FC6C85');
      root.style.setProperty('--secondary-color', '#FFB6C1');
      root.style.setProperty('--accent-color', '#E75480');
      document.body.classList.add('dark-theme');
    } else {
      root.style.setProperty('--background-dark', '#FFF0F5');
      root.style.setProperty('--background-light', '#FFE4E1');
      root.style.setProperty('--text-light', '#2c3e50');
      root.style.setProperty('--text-dark', '#2c3e50');
      root.style.setProperty('--primary-color', '#FC6C85');
      root.style.setProperty('--secondary-color', '#FFB6C1');
      root.style.setProperty('--accent-color', '#E75480');
      document.body.classList.remove('dark-theme');
    }
  }
} 