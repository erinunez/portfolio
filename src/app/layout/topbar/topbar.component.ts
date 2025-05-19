import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})

export class TopbarComponent implements OnInit {
  isHome = false;
  isProjects = false;
  isPersonal = false;
  isContacts = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set initial active state based on current route
    this.setActiveState(this.router.url);

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.setActiveState(event.url);
    });
  }

  navigateTo(route: string): void {
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
