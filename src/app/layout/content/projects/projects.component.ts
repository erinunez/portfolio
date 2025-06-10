import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  referenceImages: {
    url: string;
    description: string;
  }[];
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
      client: 'Personal',
      category: 'Web',
      longDescription:
        'A responsive portfolio website showcasing my work and skills, built with Angular and featuring a beautiful watermelon pink theme.',
      imageUrl: 'assets/images/portfolio.jpg',
      referenceImages: [
        {
          url: 'assets/images/portfolio.jpg',
          description: 'Home page with modern design and smooth animations'
        },
        {
          url: 'assets/images/portfolio-2.jpg',
          description: 'Projects section showcasing various works'
        },
        {
          url: 'assets/images/portfolio-3.jpg',
          description: 'Contact form with validation and interactive elements'
        }
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
      githubUrl: 'https://github.com/erinunez/portfolio',
      liveUrl: '',
      features: [
        'Responsive design that works on all devices',
        'Modern UI with smooth animations',
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
    // {
    //   id: 2,
    //   title: 'GIS Mapping Application',
    //   description: 'A web-based GIS application for visualizing and analyzing geographical data.',
    //   longDescription: 'An advanced GIS application that allows users to visualize, analyze, and interact with geographical data in real-time.',
    //   client: 'Personal',
    //   imageUrl: 'assets/images/project1.jpg',
    //   referenceImages: [
    //     {
    //       url: 'assets/images/project1.jpg',
    //       description: 'Main map interface with interactive controls'
    //     },
    //     {
    //       url: 'assets/images/project1-2.jpg',
    //       description: 'Data visualization and analysis tools'
    //     },
    //     {
    //       url: 'assets/images/project1-3.jpg',
    //       description: 'Custom layer management system'
    //     }
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
    //     {
    //       url: 'assets/images/project2.jpg',
    //       description: '3D product viewer with rotation controls'
    //     },
    //     {
    //       url: 'assets/images/project2-2.jpg',
    //       description: 'Product customization interface'
    //     },
    //     {
    //       url: 'assets/images/project2-3.jpg',
    //       description: 'Mobile-responsive touch controls'
    //     }
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
      category: 'Web',
      description: 'Evaluation of Key Performance Indicators (KPIs) for vendors',
      longDescription: 'This website empowers vendors to register seamlessly and enables robust evaluation of their Key Performance Indicators (KPIs) to drive success and growth.',
      imageUrl: 'assets/projects/testinggg.png',
      referenceImages: [
        {
          url: 'assets/projects/testinggg.png',
          description: 'Vendor registration and login interface'
        },
        {
          url: 'assets/projects/kpi-2.png',
          description: 'KPI evaluation dashboard with metrics'
        },
        {
          url: 'assets/projects/kpi-3.png',
          description: 'Report generation and data visualization'
        }
      ],
      technologies: ['C#', '.NET', 'Bookstrap'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Vendor registration',
        'KPI creation',
        'KPI submission',
        'KPI evaluation',
        'Project creation',
        'Report generation',
        'Performance tracking',
        'Data visualization',
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
      id: 5,
      title: 'Synapse Core',
      client: 'Synapse Innovation Sdn Bhd',
      category: 'Web',
      description: 'Tracking of employee attendance, leave and claim',
      longDescription: 'This website offers a comprehensive workforce management solution with distinct roles, including Super Admin, HR Admin, Supervisor, and Employee, each with tailored access levels. HR Admins can effectively track employee attendance, approve unusual attendance actions, manage staff activities, oversee leave and claim approvals, schedule holidays, send messages to all staff, and adjust company settings. Additionally, employees can conveniently clock in and out, apply for leaves, and submit claims.',
      imageUrl: 'assets/projects/schr/SCHR_3.png',
      referenceImages: [
        {
          url: 'assets/projects/schr/SCHR_2.png',
          description: 'Add employee'
        },
        {
          url: 'assets/projects/schr/SCHR_4.png',
          description: 'Claim form for out of pocket'
        },
        {
          url: 'assets/projects/schr/SCHR_5.png',
          description: 'Claim form for mileage'
        },
        {
          url: 'assets/projects/schr/SCHR_6.png',
          description: 'Claim form for bulk claim'
        },
        {
          url: 'assets/projects/schr/SCHR_8.png',
          description: 'Bulk claim review details'
        }
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
    },
    {
      id: 6,
      title: 'Dronos',
      client: 'Aerodyne Group',
      category: 'Web',
      description: 'Drone management system',
      longDescription: 'A complete drone-based project management solution that offers AI-powered, customizable dashboards. It features streamlined workflows with defined roles and permissions, support ticketing, custom report generation, and label management.',
      imageUrl: 'assets/projects/testinggg.png',
      referenceImages: [
        {
          url: 'assets/projects/testinggg.png',
          description: 'Vendor registration and login interface'
        },
        {
          url: 'assets/projects/kpi-2.png',
          description: 'KPI evaluation dashboard with metrics'
        },
        {
          url: 'assets/projects/kpi-3.png',
          description: 'Report generation and data visualization'
        }
      ],
      technologies: ['Javascript', 'Vue', 'Bookstrap', 'SCSS', 'Microfrontend', 'REST APIs', 'Vue I18n', 'Vuex'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Customization Dashboard',
        'User management',
        'Cuztomization Report Generation',
        'Supporting Ticket',
        'Label Management',
      ],
      challenges: [
        'Cuztomization of modules',
      ],
      solutions: [
        'Dynamic modules',
      ],
    },
    {
      id: 7,
      title: 'Davista Lighting',
      client: 'Davex Engineering',
      category: 'Web',
      description: 'Control and manage street lights',
      longDescription: 'Davista Lighting offers a robust solution for monitoring all lighting registered under the Davex company. The system features multiple roles—Super Admin, Organization Admin, and User—each with distinct access levels. Organization Admins can easily add, remove, and update lighting fixtures, organize them into different groups, control their on/off status, adjust dimming levels, and create schedules for selected lights. They can also monitor lights from various organizations using a map view and access reports from the dashboard and monitoring module. Additionally, the profile settings allow users to edit personal details, change passwords, and receive alarm notifications. In contrast, Users have limited management capabilities, primarily focused on viewing the system.',
      imageUrl: 'assets/projects/testinggg.png',
      referenceImages: [
        {
          url: 'assets/projects/testinggg.png',
          description: 'Vendor registration and login interface'
        },
        {
          url: 'assets/projects/kpi-2.png',
          description: 'KPI evaluation dashboard with metrics'
        },
        {
          url: 'assets/projects/kpi-3.png',
          description: 'Report generation and data visualization'
        }
      ],
      technologies: ['Typescript', 'Angular', 'Open Street Map', 'Nebular', 'Eva Icons', 'REST APIs', 'Ag Grid'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Organization management',
        'User management',
        'Site management',
        'Map view',
        'Dashboard general',
        'Control and automate device',
      ],
      challenges: [
        'GIS integration',
        'difficulty of the requirements'
      ],
      solutions: [
        'Research and develop libraries'
      ],
    },
    {
      id: 7,
      title: 'Unified Control',
      client: 'Wisma CIMB, Menara Public Bank, Woman and Child Hospital',
      category: 'Web',
      description: 'Building Management System',
      longDescription: 'This proprietary Building Management System (BMS) offers tailored services to various clients, providing unique perspectives for each client. It features 3D, 2D, and schematic views of components primarily focused on HVAC, lighting, and chiller systems. Clients can monitor the on/off status of each component through animated visuals, tables, or detailed views, as well as control components and track their performance statistics and alarms. Each component is organized by category and building level. Additionally, the system includes user management features that enable clients to easily add, update, or remove users and their roles, as well as view the user audit trail.',
      imageUrl: 'assets/projects/testinggg.png',
      referenceImages: [
        {
          url: 'assets/projects/testinggg.png',
          description: 'Vendor registration and login interface'
        },
        {
          url: 'assets/projects/kpi-2.png',
          description: 'KPI evaluation dashboard with metrics'
        },
        {
          url: 'assets/projects/kpi-3.png',
          description: 'Report generation and data visualization'
        },
        {
          url: 'assets/projects/testinggg.png',
          description: 'Vendor registration and login interface'
        },
        {
          url: 'assets/projects/kpi-2.png',
          description: 'KPI evaluation dashboard with metrics'
        },
        {
          url: 'assets/projects/kpi-3.png',
          description: 'Report generation and data visualization'
        },
        {
          url: 'assets/projects/testinggg.png',
          description: 'Vendor registration and login interface'
        },
        {
          url: 'assets/projects/kpi-2.png',
          description: 'KPI evaluation dashboard with metrics'
        },
        {
          url: 'assets/projects/kpi-3.png',
          description: 'Report generation and data visualization'
        }
      ],
      technologies: ['Typescript', 'Angular', 'Babylon.js', 'DrawIo', 'Prime NG', 'Prime Flex', 'MXGraph', 'REST APIs'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Customization Dashboard',
        'User management',
        'Role management',
        'Service Management',
        'Report Generation',
        'Data Visualization'
      ],
      challenges: [
        '3D and 2D integration',
        'difficulty and complexity of the requirements for each site clients',
        'tight deadline for each site clients',
      ],
      solutions: [
        'Research and develop related libraries',
      ],
    },
    {
      id: 6,
      title: 'Admin Portal & Unified Control',
      client: 'MRANTI',
      category: 'UI/UX',
      description: 'A design for IoT Website',
      longDescription: 'A comprehensive UI/UX design project for an IoT website system, focusing on creating an monitoring and managing of devices.',
      imageUrl: 'assets/projects/uiux/ecommerce-main.png',
      referenceImages: [
        {
          url: 'assets/projects/uiux/ecommerce-main.png',
          description: 'Main app interface with featured products and categories'
        },
        {
          url: 'assets/projects/uiux/ecommerce-cart.png',
          description: 'Shopping cart with smooth animations and clear product details'
        },
        {
          url: 'assets/projects/uiux/ecommerce-product.png',
          description: 'Product detail page with image gallery and specifications'
        },
        {
          url: 'assets/projects/uiux/ecommerce-checkout.png',
          description: 'Streamlined checkout process with multiple payment options'
        }
      ],
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Dashboard',
        'User Access Management',
        'User Log Management',
        'Alarm Handler',
        'Manual Data Entry',
        'Widget Management',
        'Report Generation',
      ],
      challenges: [
        'Handling UIUX for IoT System',
        'First time working with IoT System and UIUX Design',
      ],
      solutions: [
        'Managed to understand the requirements and the flow of the system',
        'Getting helped from leader to understand the system and requirements',
        'Managed to get used to tools and libraries of figma',
      ],
    },
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
