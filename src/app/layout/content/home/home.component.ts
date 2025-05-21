import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  skills:any[] = []
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.skills = [ 'Vue', 'Angular', 'Javascript', 'Typescript', 'SCSS', 'HTML5', 'CSS']
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}