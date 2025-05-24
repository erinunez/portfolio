import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenges: string[];
  solutions: string[];
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showModal = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
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
    {
      id: 2,
      title: 'GIS Mapping Application',
      description: 'A web-based GIS application for visualizing and analyzing geographical data.',
      longDescription: 'An advanced GIS application that allows users to visualize, analyze, and interact with geographical data in real-time.',
      imageUrl: 'assets/images/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'GIS', 'Leaflet.js'],
      githubUrl: 'https://github.com/yourusername/gis-app',
      liveUrl: 'https://gis-app-demo.com',
      features: [
        'Interactive map visualization',
        'Real-time data updates',
        'Custom layer management',
        'Data analysis tools',
        'Export functionality',
      ],
      challenges: [
        'Handling large datasets efficiently',
        'Implementing complex map interactions',
        'Optimizing rendering performance',
      ],
      solutions: [
        'Implemented data chunking and lazy loading',
        'Used Web Workers for heavy computations',
        'Optimized map rendering with canvas',
      ],
    },
    {
      id: 3,
      title: '3D Product Viewer',
      description: 'Interactive 3D product visualization using Babylon.js for an e-commerce platform.',
      longDescription: 'A cutting-edge 3D product viewer that allows customers to interact with products in a virtual environment.',
      imageUrl: 'assets/images/project2.jpg',
      technologies: ['Babylon.js', 'TypeScript', 'WebGL', 'Three.js'],
      githubUrl: 'https://github.com/yourusername/3d-viewer',
      liveUrl: 'https://3d-viewer-demo.com',
      features: [
        '360-degree product rotation',
        'Zoom and pan controls',
        'Custom lighting effects',
        'Product customization',
        'Mobile support',
      ],
      challenges: [
        'Optimizing 3D model loading',
        'Implementing smooth interactions',
        'Ensuring cross-browser compatibility',
      ],
      solutions: [
        'Used model compression techniques',
        'Implemented touch controls for mobile',
        'Created fallback rendering for older browsers',
      ],
    }
  ];

  openProjectDetails(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeProjectDetails() {
    this.showModal = false;
    this.selectedProject = null;
    document.body.style.overflow = ''; // Restore scrolling
  }
}
