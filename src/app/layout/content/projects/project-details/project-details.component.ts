import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  standalone: false,
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  @Input() id: string = 'sidebarNav';
  @Input() selectedProject: any;

  isOpen = false;

  ngOnInit() {
    // Initialize the drawer in closed state
    const drawer = document.getElementById(this.id);
    if (drawer) {
      drawer.style.width = '0';
    }
    console.log(this.selectedProject);
    
  }

  openNav() {
    this.isOpen = true;
    const drawer = document.getElementById(this.id);
    if (drawer) {
      drawer.style.width = '850px';
    }
  }

  closeNav() {
    this.isOpen = false;
    const drawer = document.getElementById(this.id);
    if (drawer) {
      drawer.style.width = '0';
    }
  }

  openImageModal(imageUrl: string) {
    // Create a new window/tab with the image
    window.open(imageUrl, '_blank');
  }
}
