import { Component, OnInit, Output, EventEmitter } from '@angular/core';

type TabStatus = 'home' | 'projects' | 'about-me' | 'contacts';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})

export class TopbarComponent implements OnInit {
  @Output() currentTabs = new EventEmitter<TabStatus>();
  
  isHome = false;
  isProjects = false;
  isPersonal = false;
  isContacts = false;
  currentStatus: TabStatus = 'home';

  ngOnInit(): void {
    localStorage.setItem("tabs", this.currentStatus);
    this.changeButtonStatus(this.currentStatus);
  }

  changeButtonStatus(val: TabStatus): void {
    this.currentStatus = val;
    this.currentTabs.emit(this.currentStatus);
    localStorage.setItem("tabs", this.currentStatus);
    
    // Reset all states
    this.isHome = false;
    this.isProjects = false;
    this.isPersonal = false;
    this.isContacts = false;

    // Set the active state
    switch (val) {
      case 'home':
        this.isHome = true;
        break;
      case 'projects':
        this.isProjects = true;
        break;
      case 'about-me':
        this.isPersonal = true;
        break;
      case 'contacts':
        this.isContacts = true;
        break;
    }
  }
}
