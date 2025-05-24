import { Component } from '@angular/core';

interface Skill {
  name: string;
  rating: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about-me',
  standalone: false,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5 & CSS3', rating: 5 },
        { name: 'JavaScript/TypeScript', rating: 5 },
        { name: 'Angular', rating: 5 },
        { name: 'React', rating: 4 },
        { name: 'Vue.js', rating: 3 },
        { name: 'SCSS/SASS', rating: 5 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'C#', rating: 4 },
        { name: '.NET', rating: 4 },
        { name: 'Node.js', rating: 3 },
        { name: 'RESTful APIs', rating: 4 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', rating: 5 },
        { name: 'GIS', rating: 4 },
        { name: 'Babylon 3D', rating: 3 },
        { name: 'Responsive Design', rating: 5 }
      ]
    }
  ];
}
