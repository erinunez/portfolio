import { Component } from '@angular/core';

interface Skill {
  name: string;
  rating: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface PersonalSkill {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about-me',
  standalone: false,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  Math = Math; // Add Math to the component for template access

  selectedTab: 'about' | 'skills' | 'cert' = 'about';
  setTab(tab: 'about' | 'skills' | 'cert') {
    this.selectedTab = tab;
  }

  personalSkills: PersonalSkill[] = [
    {
      name: 'Performance Under Pressure',
      description: 'Able to thrive under pressure and meet tight deadlines',
      icon: '⛈️'
    },
    // {
    //   name: 'Problem Solving',
    //   description: 'Analytical thinker with a knack for breaking down complex problems into manageable solutions',
    //   icon: '💡'
    // },
    {
      name: 'Team Player',
      description: 'Proficient in collaborating within a team or working independently and excellent communicator with colleagues.',
      icon: '🤝'
    },
    {
      name: 'Time Management',
      description: 'Efficiently balancing multiple responsibilities while maintaining high-quality output',
      icon: '⏰'
    },
    // {
    //   name: 'Adaptability',
    //   description: 'Quick to learn and adapt to new technologies and changing project requirements',
    //   icon: '🔄'
    // },
    {
      name: 'Adaptability',
      description: 'Works well with minimal supervision and competent in effectively managing project tasks.',
      icon: '🔄'
    },
    {
      name: 'Attention to Detail',
      description: 'Meticulous approach to coding and design, ensuring high-quality deliverables',
      icon: '🔍'
    },
    {
      name: 'Continuous Learning',
      description: 'Passionate about improving skills and knowledge',
      icon: '📚'
    }
    // {
    //   name: 'Continuous Learning',
    //   description: 'Passionate about staying updated with the latest technologies and best practices',
    //   icon: '📚'
    // }
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', rating: 4 },
        { name: 'CSS3', rating: 4 },
        { name: 'SCSS/SASS', rating: 3 },
        { name: 'JavaScript', rating: 4 },
        { name: 'TypeScript', rating: 3 },
        { name: 'Angular', rating: 3 },
        { name: 'Vue', rating: 3 },
        { name: '.NET', rating: 2 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', rating: 0.5 },
        { name: 'RESTful APIs', rating: 4 },
      ]
    },
    {
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', rating: 3 },
        { name: 'Wireframing', rating: 0.5 },
        { name: 'Prototyping', rating: 0.5 },
        // { name: 'User Research', rating: 3 },
        { name: 'Design Systems', rating: 0.5 },
        // { name: 'Responsive Design', rating: 4.5 },
        { name: 'Adobe XD', rating: 0.5 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'FileZilla', rating: 5 },
        // { name: 'Figma', rating: 3 },
        { name: 'Visual Studio Code', rating: 5 },
        { name: 'Git', rating: 4.5 },
        { name: 'Postman', rating: 3 },
      ]
    },
    {
      title: 'CSS Framework and Libraries',
      skills: [
        { name: 'Tailwind CSS', rating: 3 },
        { name: 'Bootstrap', rating: 4 },
        { name: 'PrimeNG', rating: 4.5 },
        // { name: 'Figma', rating: 3 },
        { name: 'Nebular', rating: 2 },
        { name: 'Bootstrap Vue', rating: 4 },
      ]
    },
    {
      title: 'Creative Tools',
      skills: [
        { name: 'Blender', rating: 0.5 },
        { name: 'Unity', rating: 1 },
      ]
    },
  ];
}
