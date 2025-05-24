import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  referenceImages: string[];
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
    // {
    //   id: 1,
    //   title: 'Portfolio Website',
    //   description: 'A modern portfolio website built with Angular',
    //   client: 'Personal',
    //   longDescription:
    //     'A responsive portfolio website showcasing my work and skills, built with Angular and featuring a beautiful watermelon pink theme.',
    //   imageUrl: 'assets/images/portfolio.jpg',
    //   referenceImages: [
    //     'assets/images/portfolio.jpg',
    //     'assets/images/portfolio-2.jpg',
    //     'assets/images/portfolio-3.jpg'
    //   ],
    //   technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
    //   githubUrl: '',
    //   liveUrl: '',
    //   features: [
    //     'Responsive design that works on all devices',
    //     'Modern UI with smooth animations',
    //     'Dark/Light mode toggle',
    //     'Project showcase section',
    //     'Contact form with validation',
    //   ],
    //   challenges: [
    //     'Implementing smooth page transitions',
    //     'Creating responsive layouts for different screen sizes',
    //     'Optimizing performance for fast loading',
    //   ],
    //   solutions: [
    //     'Used Angular animations for smooth transitions',
    //     'Implemented CSS Grid and Flexbox for responsive layouts',
    //     'Optimized images and implemented lazy loading',
    //   ],
    // },
    // {
    //   id: 2,
    //   title: 'GIS Mapping Application',
    //   description: 'A web-based GIS application for visualizing and analyzing geographical data.',
    //   longDescription: 'An advanced GIS application that allows users to visualize, analyze, and interact with geographical data in real-time.',
    //   client: 'Personal',
    //   imageUrl: 'assets/images/project1.jpg',
    //   referenceImages: [
    //     'assets/images/project1.jpg',
    //     'assets/images/project1-2.jpg',
    //     'assets/images/project1-3.jpg'
    //   ],
    //   technologies: ['Angular', 'TypeScript', 'GIS', 'Leaflet.js'],
    //   githubUrl: 'https://github.com/yourusername/gis-app',
    //   liveUrl: 'https://gis-app-demo.com',
    //   features: [
    //     'Interactive map visualization',
    //     'Real-time data updates',
    //     'Custom layer management',
    //     'Data analysis tools',
    //     'Export functionality',
    //   ],
    //   challenges: [
    //     'Handling large datasets efficiently',
    //     'Implementing complex map interactions',
    //     'Optimizing rendering performance',
    //   ],
    //   solutions: [
    //     'Implemented data chunking and lazy loading',
    //     'Used Web Workers for heavy computations',
    //     'Optimized map rendering with canvas',
    //   ],
    // },
    // {
    //   id: 3,
    //   title: '3D Product Viewer',
    //   description: 'Interactive 3D product visualization using Babylon.js for an e-commerce platform.',
    //   longDescription: 'A cutting-edge 3D product viewer that allows customers to interact with products in a virtual environment.',
    //   imageUrl: 'assets/images/project2.jpg',
    //   client: 'Personal',
    //   referenceImages: [
    //     'assets/images/project2.jpg',
    //     'assets/images/project2-2.jpg',
    //     'assets/images/project2-3.jpg'
    //   ],
    //   technologies: ['Babylon.js', 'TypeScript', 'WebGL', 'Three.js'],
    //   githubUrl: 'https://github.com/yourusername/3d-viewer',
    //   liveUrl: 'https://3d-viewer-demo.com',
    //   features: [
    //     '360-degree product rotation',
    //     'Zoom and pan controls',
    //     'Custom lighting effects',
    //     'Product customization',
    //     'Mobile support',
    //   ],
    //   challenges: [
    //     'Optimizing 3D model loading',
    //     'Implementing smooth interactions',
    //     'Ensuring cross-browser compatibility',
    //   ],
    //   solutions: [
    //     'Used model compression techniques',
    //     'Implemented touch controls for mobile',
    //     'Created fallback rendering for older browsers',
    //   ],
    // },
    {
      id: 4,
      title: 'Vendor KPI System',
      client: 'Johor Corporation',
      description: 'Evaluation of Key Performance Indicators (KPIs) for vendors',
      longDescription: 'This website empowers vendors to register seamlessly and enables robust evaluation of their Key Performance Indicators (KPIs) to drive success and growth.',
      imageUrl: 'assets/projects/testinggg.png',
      referenceImages: [
        'assets/projects/testinggg.png',
        'assets/projects/kpi-2.png',
        'assets/projects/kpi-3.png'
      ],
      technologies: ['C#', '.NET', 'Bookstrap'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Vendor registration',
        'KPI management',
        'KPI evaluation',
        'Project management',
        'Report generation',
      ],
      challenges: [
        'Customization of KPI evaluation',
        'Report generation',
      ],
      solutions: [
        'Used crystal report for report generation',
        'Created dynamic form for KPI evaluation',
      ],
    },
    {
      id: 4,
      title: 'Synapse Core HR (Web)',
      client: 'Synapse Innovation Sdn Bhd',
      description: 'Tracking of employee attendance, leave and claim',
      longDescription: 'This website offers a comprehensive workforce management solution with distinct roles, including Super Admin, HR Admin, Supervisor, and Employee, each with tailored access levels. HR Admins can effectively track employee attendance, approve unusual attendance actions, manage staff activities, oversee leave and claim approvals, schedule holidays, send messages to all staff, and adjust company settings. Additionally, employees can conveniently clock in and out, apply for leaves, and submit claims.',
      imageUrl: 'assets/projects/testinggg.png',
      referenceImages: [
        'assets/projects/testinggg.png',
        'assets/projects/kpi-2.png',
        'assets/projects/kpi-3.png'
      ],
      technologies: ['Vue', 'Javascript', 'Bookstrap-Vue', 'SCSS', 'Axios', 'Vue Router', 'Vue I18n', 'Vuex'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Dashboard',
        'User management',
        'Attendance management',
        'Leave management',
        'Claim management',
        'Public holiday management',
      ],
      challenges: [
        'Different form based on type of claim',
        'Public holiday settings',
      ],
      solutions: [
        'Created dynamic form for claim',
        'Drag and drop selected dates for public holiday according to year and company policy',
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

  openImageModal(imageUrl: string) {
    // Create a new window/tab with the image
    window.open(imageUrl, '_blank');
  }
}
