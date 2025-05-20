import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Angular',
      longDescription:
        'A responsive portfolio website showcasing my work and skills, built with Angular and featuring a beautiful watermelon pink theme.',
      imageUrl: 'assets/images/portfolio.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.com',
      features: [
        'Responsive design that works on all devices',
        'Modern UI with smooth animations',
        'Dark/Light mode toggle',
        'Project showcase section',
        'Contact form with validation',
      ],
      challenges: [
        'Implementing smooth page transitions',
        'Creating responsive layouts for different screen sizes',
        'Optimizing performance for fast loading',
      ],
      solutions: [
        'Used Angular animations for smooth transitions',
        'Implemented CSS Grid and Flexbox for responsive layouts',
        'Optimized images and implemented lazy loading',
      ],
    },
    // Add more projects here
  ];
}
