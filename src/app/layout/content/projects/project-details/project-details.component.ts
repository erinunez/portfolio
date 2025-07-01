import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: false,
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  @Input() selectedProject: any;
  constructor(private router: Router) {}

  ngOnInit() {
    const getData:any = localStorage.getItem('project')
    this.selectedProject = JSON.parse(getData)
  }

  getGalleryRows() {
    if (!this.selectedProject?.referenceImages) return [];
    
    const rows = [];
    for (let i = 0; i < this.selectedProject.referenceImages.length; i += 2) {
      rows.push(this.selectedProject.referenceImages.slice(i, i + 2));
    }
    return rows;
  }

  backtoProjects(){
    this.selectedProject = null;
    localStorage.removeItem('project');
    this.router.navigate(['/projects']);
  }

  openImageModal(imageUrl: string) {
    // Create a new window/tab with the image
    window.open(imageUrl, '_blank');
  }
}
