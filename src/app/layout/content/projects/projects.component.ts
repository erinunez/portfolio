import { Component, ViewChild } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { Router } from '@angular/router';

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
  @ViewChild(ProjectDetailsComponent) projectDetails!: ProjectDetailsComponent;
  showModal = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A portfolio website built with Angular with full of heart. ',
      client: 'Personal',
      category: 'Web',
      longDescription:
        'A responsive portfolio website showcasing my work and skills, built with Angular and featuring a beautiful watermelon pink theme.',
      imageUrl: 'assets/projects/portfolio/portfolio_home.png',
      referenceImages: [
        {
          url: 'assets/projects/portfolio/portfolio_skill.png',
          description: 'Rating skills page'
        },
        {
          url: 'assets/projects/portfolio/portfolio_contacts.png',
          description: 'Contacts page'
        },
        {
          url: 'assets/projects/portfolio/portfolio_aboutme.png',
          description: 'Description of the owner'
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
      id: 2,
      title: 'Vendor KPI System',
      client: 'Johor Corporation',
      category: 'Web',
      description: 'Evaluation of Key Performance Indicators (KPIs) for vendors',
      longDescription: 'This website empowers vendors to register seamlessly and enables robust evaluation of their Key Performance Indicators (KPIs) to drive success and growth.',
      imageUrl: 'assets/projects/jcorp/evaluation.png',
      referenceImages: [
        {
          url: 'assets/projects/jcorp/suppliers.png',
          description: 'This module grants admin access to create, update, and view supplier details. Suppliers cannot be deleted, but the admin can toggle their status between active and inactive'
        },
        {
          url: 'assets/projects/jcorp/criteria2.png',
          description: 'This module enables admin to create, update, delete, and view criteria to be included in the evaluation form.'
        },
        {
          url: 'assets/projects/jcorp/projects(manager).png',
          description: 'Manager can oversee project management by adding, viewing, and updating projects, as well as accessing reports. They also have the authority to approve or reject projects that have been evaluated by the evaluators.'
        },
        {
          url: 'assets/projects/jcorp/evaluation.png',
          description: 'A chosen project will undergo evaluation by the evaluators, using a list of criteria established by the admin. Each criterion must be rated on a scale given'
        },
        {
          url: 'assets/projects/jcorp/criteria.png',
          description: 'Example of evaluation form for evaluators to assess the selected vendor.'
        },
        {
          url: 'assets/projects/jcorp/evaluator_projects.png',
          description: 'Evaluators can view all projects assigned to them, and the action buttons will change according to the status column—whether it is rejected, approved, or evaluated.'
        },
        {
          url: 'assets/projects/jcorp/performance_manager.png',
          description: 'List of projects to monitor the status evaluation and read the details.'
        },
        {
          url: 'assets/projects/jcorp/performance.png',
          description: 'On Manager view, they can view and export reports for projects that have been successfully evaluated.'
        },
        {
          url: 'assets/projects/jcorp/projects_involvement.png',
          description: 'Manager is reponsible to track the staff members responsible for evaluating the projects.'
        },
        {
          url: 'assets/projects/jcorp/projects.png',
          description: 'Manager can only view and download the report once the project has been successfully evaluated. '
        },
        {
          url: 'assets/projects/jcorp/projects2.png',
          description: 'Manager can view all the projects including previous projects by filtering the dates'
        },

      ],
      technologies: ['C#', '.NET', 'Bookstrap'],
      githubUrl: '',
      liveUrl: '',
      features: [
        'Vendor registration',
        'KPI Criteria Creation',
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
      id: 3,
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
      id: 4,
      title: 'Dronos OS',
      client: 'Aerodyne Group',
      category: 'Web',
      description: 'Drone management system',
      longDescription: 'Drone OS offers an all-in-one solution for managing drone-based projects, designed to simplify workflows and boost productivity. It includes advanced features such as interactive map navigation, intelligent clustering, AI-driven defect detection with image annotation, and precision editing tools. Users can also benefit from customizable dashboards, organized image galleries, and comprehensive collaboration tools like role-based permissions, integrated support ticketing, and tailored report generation.',
      imageUrl: 'assets/projects/dronos/User Role and Permission.png',
      referenceImages: [
        {
          url: 'assets/projects/dronos/User Role and Permission.png',
          description: 'In User Management, roles are created by the Super Admin, each with its own specific permissions. The Super Admin can assign these roles to existing users or invite new users. The User Management section includes role names, total users, a list of users, and detailed user information. User details can be edited or users can be deleted from their specific roles as needed.'
        },
        {
          url: 'assets/projects/dronos/Label Management.png',
          description: 'Label Management allows users to customize data set labels for smart filtering on the user dashboard, effectively organizing collections of labels. This feature streamlines asset management by enabling efficient filtering of assets.'
        },
        {
          url: 'assets/projects/dronos/Personalized Dashboard.png',
          description: `The dashboard displays overall statistics and project growth. Users have the freedom to personalize their dashboards according to their preferences, allowing them to add, remove, and resize cards within the layout. As a result, each user's dashboard can have a unique appearance tailored to their needs.`
        },
        {
          url: 'assets/projects/dronos/Project Management.png',
          description: `Take control of your drone-based projects with Drone OS’s intuitive Globe view. This interactive, map-based interface offers a global perspective, allowing you to create, update, and delete projects with ease. Seamlessly navigate between project sites, access data summaries, identify clustering trends, and streamline your workflows—all in one powerful, visual platform.`
        },
        {
          url: 'assets/projects/dronos/Supporting Ticket.png',
          description: `The Support Ticket system is used for feature requests and bug reports. It allows users to monitor and manage issues by creating tickets and tracking their progress until resolution. The bug report feature enables users to submit operational issues directly, streamlining the reporting process for operational bugs.`
        },
        {
          url: 'assets/projects/dronos/Custom Report Generation.png',
          description: `In this system, users can customize their reports based on selected projects, missions, and sites. The reporting template adheres to a standard format. Users have the option to preview and modify the report content before generating the final report.`
        }
      ],
      technologies: ['Javascript', 'Vue',  'Vuex', 'Bookstrap', 'SCSS', 'Microfrontend', 'REST APIs', 'Vue I18n',],
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
      id: 5,
      title: 'Davista Lighting',
      client: 'Davex Engineering',
      category: 'Web',
      description: 'Control and manage street lights',
      longDescription: 'Davista Lighting offers a robust solution for monitoring all lighting registered under the Davex company. The system features multiple roles—Super Admin, Organization Admin, and User—each with distinct access levels. Organization Admins can easily add, remove, and update lighting fixtures, organize them into different groups, control their on/off status, adjust dimming levels, and create schedules for selected lights. They can also monitor lights from various organizations using a map view and access reports from the dashboard and monitoring module. Additionally, the profile settings allow users to edit personal details, change passwords, and receive alarm notifications. In contrast, Users have limited management capabilities, primarily focused on viewing the system.',
      imageUrl: 'assets/projects/davex/davex_automate.png',
      referenceImages: [
        {
          url: 'assets/projects/davex/davex_login.png',
          description: 'Login interface'
        },
        {
          url: 'assets/projects/davex/davex_automate.png',
          description: 'Outdoor automate device to control lux'
        },
        {
          url: 'assets/projects/davex/davex_alert.png',
          description: 'Configuration alert management of the lights'
        },
        {
          url: 'assets/projects/davex/davex_automation_controls.png',
          description: 'Scheduling brightness level for specific lights'
        },
        {
          url: 'assets/projects/davex/davex_control.png',
          description: 'Control status of the lights'
        },
        {
          url: 'assets/projects/davex/davex_dashboard_outdoor.png',
          description: 'Overview of the lights with grouping, can control, edit, add and update of the lights.'
        },
        {
          url: 'assets/projects/davex/davex_dashboard.png',
          description: 'Overview of the lights with statistics'
        },
        {
          url: 'assets/projects/davex/davex_organization.png',
          description: 'Listing of organisation that involved.'
        },
        {
          url: 'assets/projects/davex/davex_reporting.png',
          description: 'Report of the alert lights'
        },
        {
          url: 'assets/projects/davex/davex_setting.png',
          description: 'Setting module to update password, profile and preference.'
        },
        {
          url: 'assets/projects/davex/davex_user.png',
          description: 'User management to add, update and delete user'
        },
      ],
      technologies: ['Typescript', 'Angular V17', 'Open Street Map', 'Nebular', 'Eva Icons', 'REST APIs', 'Ag Grid'],
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
      id: 6,
      title: 'Unified Control',
      client: 'Wisma CIMB, Menara Public Bank, Woman and Child Hospital',
      category: 'Web',
      description: 'Building Management System',
      longDescription: 'This proprietary Building Management System (BMS) offers tailored services to various clients, providing unique perspectives for each client. It features 3D, 2D, and schematic views of components primarily focused on HVAC, lighting, and chiller systems. Clients can monitor the on/off status of each component through animated visuals, tables, or detailed views, as well as control components and track their performance statistics and alarms. Each component is organized by category and building level. Additionally, the system includes user management features that enable clients to easily add, update, or remove users and their roles, as well as view the user audit trail.',
      imageUrl: 'assets/projects/uc/Dashboard.png',
      referenceImages: [
        {
          url: 'assets/projects/uc/Dashboard.png',
          description: 'We offer different perspectives of dashboard tailored to our clients. '
        },
        {
          url: 'assets/projects/uc/Summary.png',
          description: 'We offer different perspectives of dashboard tailored to our clients. '
        },
        {
          url: 'assets/projects/uc/Role Management.png',
          description: 'User Management allows users to create new roles with specific permissions. By selecting these permissions, users can enable access to view, add, remove, or update modules.'
        },
        {
          url: 'assets/projects/uc/Chiller.png',
          description: 'Layout of chiller each of the clients'
        },
        {
          url: 'assets/projects/uc/Chiller2.png',
          description: 'Layout of chiller each of the clients'
        },
        {
          url: 'assets/projects/uc/Chiller Details.png',
          description: 'Details of each chillers'
        },
        {
          url: 'assets/projects/uc/Chiller Schematic.png',
          description: 'Layout of schematic chiller requested by client'
        },
        {
          url: 'assets/projects/uc/FCU Floorplan.png',
          description: 'Fan Coil Unit layout for the selected floor'
        },
        {
          url: 'assets/projects/uc/Lighting Summary.png',
          description: 'Summary of lighting for all floors'
        },
        {
          url: 'assets/projects/uc/List floor.png',
          description: 'List of the floors of the building'
        },
        {
          url: 'assets/projects/uc/VAV Floorplan.png',
          description: 'Variable Air Volume layout for selected floor'
        }
      ],
      technologies: ['Typescript', 'Angular V17', 'Babylon.js', 'DrawIo', 'Prime NG', 'Prime Flex', 'MXGraph', 'REST APIs'],
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
    // {
    //   id: 7,
    //   title: 'Admin Portal & Unified Control',
    //   client: 'MRANTI',
    //   category: 'UI/UX',
    //   description: 'A design for IoT Website',
    //   longDescription: 'A comprehensive UI/UX design project for an IoT website system, focusing on creating an monitoring and managing of devices.',
    //   imageUrl: 'assets/projects/uiux/ecommerce-main.png',
    //   referenceImages: [
    //     {
    //       url: 'assets/projects/uiux/ecommerce-main.png',
    //       description: 'Main app interface with featured products and categories'
    //     },
    //     {
    //       url: 'assets/projects/uiux/ecommerce-cart.png',
    //       description: 'Shopping cart with smooth animations and clear product details'
    //     },
    //     {
    //       url: 'assets/projects/uiux/ecommerce-product.png',
    //       description: 'Product detail page with image gallery and specifications'
    //     },
    //     {
    //       url: 'assets/projects/uiux/ecommerce-checkout.png',
    //       description: 'Streamlined checkout process with multiple payment options'
    //     }
    //   ],
    //   technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing', 'Angular', 'Typescript', 'REST APIs', 'Prime NG', 'Tailwind CSS'],
    //   githubUrl: '',
    //   liveUrl: '',
    //   features: [
    //     'Dashboard',
    //     'User Access Management',
    //     'User Log Management',
    //     'Alarm Handler',
    //     'Manual Data Entry',
    //     'Widget Management',
    //     'Report Generation',
    //   ],
    //   challenges: [
    //     'Handling UIUX for IoT System',
    //     'First time working with IoT System and UIUX Design',
    //   ],
    //   solutions: [
    //     'Managed to understand the requirements and the flow of the system',
    //     'Getting helped from leader to understand the system and requirements',
    //     'Managed to get used to tools and libraries of figma',
    //   ],
    // },
  ];
  constructor(private router: Router) {}
  goToPage(project: Project) {
    this.selectedProject = project;
    const tempData:any = JSON.stringify(this.selectedProject)
    localStorage.setItem('project', tempData)
    this.router.navigate(['/projects-details']);
  }
}
