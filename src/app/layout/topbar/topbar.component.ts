import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})

export class TopbarComponent implements OnInit {
  isCollapsed = false;
  isHome = true;
  isProjects = false;
  isPersonal = false;
  isContacts = false;
  isDarkMode = false;

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {
    // Set initial active state based on current route
    this.setActiveState(this.router.url);

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.setActiveState(event.url);
    });

    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  navigateTo(route: string): void {
    // Update active states
    this.isHome = route === 'home';
    this.isProjects = route === 'projects';
    this.isPersonal = route === 'about-me';
    this.isContacts = route === 'contacts';

    // Navigate to the route
    this.router.navigate([route]);
  }

  private setActiveState(url: string): void {
    // Reset all states
    this.isHome = false;
    this.isProjects = false;
    this.isPersonal = false;
    this.isContacts = false;

    // Set active state based on URL
    if (url.includes('home') || url === '/') {
      this.isHome = true;
    } else if (url.includes('projects')) {
      this.isProjects = true;
    } else if (url.includes('about-me')) {
      this.isPersonal = true;
    } else if (url.includes('contacts')) {
      this.isContacts = true;
    }
  }
}
