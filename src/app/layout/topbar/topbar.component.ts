import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})

export class TopbarComponent implements OnInit {
  @Output() currentTabs = new EventEmitter<any>();
  isHome:any = true
  isProjects:any = false
  isPersonal:any = false
  isContacts:any = false
  currentStatus:any = 'home'

  ngOnInit(): void{
    localStorage.setItem("tabs", this.currentStatus);

  }

  changeButtonStatus(val:any){
    this.currentStatus = val
    this.currentTabs.emit(this.currentStatus);
    localStorage.setItem("tabs", this.currentStatus);
    if(val === 'home') {
      this.isHome = true
      this.isProjects = false
      this.isPersonal = false
      this.isContacts = false
    } else if(val === 'projects') {
      this.isHome = false
      this.isProjects = true
      this.isPersonal = false
      this.isContacts = false
    } else if(val === 'about-me') {
      this.isHome = false
      this.isProjects = false
      this.isPersonal = true
      this.isContacts = false
    } else if(val === 'contacts') {
      this.isHome = false
      this.isProjects = false
      this.isPersonal = false
      this.isContacts = true
    }
  }
}
