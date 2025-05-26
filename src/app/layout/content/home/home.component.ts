import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as L from 'leaflet';

interface ProjectLocation {
  name: string;
  coordinates: L.LatLngTuple;
  role: string;
  description: string;
  technologies: string[];
  duration: string;
  screenshot: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  skills: any[] = [];
  private map: L.Map | undefined;
  
  projectLocations: ProjectLocation[] = [
    {
      name: 'Zaireen Akhzar',
      coordinates: [2.6917, 101.7500], // Sepang
      role: 'Front-end Developer',
      description: 'Current Location',
      technologies: ['Vue', 'Angular', 'TypeScript'],
      duration: 'Present',
      screenshot: 'assets/images/portfolio-screenshot.png'
    },
    {
      name: 'Project Alpha',
      coordinates: [3.1390, 101.6869], // Kuala Lumpur
      role: 'Senior Front-end Developer',
      description: 'E-commerce Platform Development',
      technologies: ['Vue.js', 'TypeScript', 'SCSS'],
      duration: '2022-2023',
      screenshot: 'assets/images/project-alpha.png'
    },
    {
      name: 'Project Beta',
      coordinates: [3.0738, 101.5183], // Petaling Jaya
      role: 'Front-end Developer',
      description: 'GIS Application Development',
      technologies: ['Angular', 'TypeScript', 'Leaflet'],
      duration: '2021-2022',
      screenshot: 'assets/images/project-beta.png'
    },
    {
      name: 'Project Gamma',
      coordinates: [3.1579, 101.7119], // Subang Jaya
      role: 'Full Stack Developer',
      description: '3D Visualization Platform',
      technologies: ['Vue.js', 'Babylon.js', 'TypeScript'],
      duration: '2020-2021',
      screenshot: 'assets/images/project-gamma.png'
    }
  ];
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.skills = ['Vue', 'Angular', 'Javascript', 'Typescript', 'SCSS', 'HTML5', 'CSS'];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap(): void {
    try {
      const sepangCoords: L.LatLngTuple = [2.6917, 101.7500];
      
      const mapContainer = document.getElementById('map');
      if (!mapContainer) {
        console.error('Map container not found');
        return;
      }

      this.map = L.map('map', {
        center: sepangCoords,
        zoom: 10,
        zoomControl: true
      });
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(this.map);

      // Create custom icon
      const customIcon = L.icon({
        iconUrl: 'assets/icon/pin.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      // Add markers for each project location
      this.projectLocations.forEach(project => {
        const popupContent = `
          <div class="custom-popup">
            <div class="popup-header">
              <h3>${project.name}</h3>
              <span class="role">${project.role}</span>
            </div>
            <div class="popup-screenshot">
              <img src="${project.screenshot}" alt="${project.name} screenshot" />
            </div>
            <div class="popup-content">
              <p><i class="fas fa-map-marker-alt"></i> ${project.description}</p>
              <p><i class="fas fa-code"></i> ${project.technologies.join(', ')}</p>
              <p><i class="fas fa-clock"></i> ${project.duration}</p>
            </div>
            <div class="popup-footer">
              <a href="mailto:your.email@example.com" class="contact-btn">
                <i class="fas fa-envelope"></i> Contact
              </a>
            </div>
          </div>
        `;

        L.marker(project.coordinates, { icon: customIcon })
          .addTo(this.map!)
          .bindPopup(popupContent, {
            maxWidth: 350,
            className: 'custom-popup-container'
          });
      });

      // Open the popup for the current location
      const currentLocation = this.projectLocations[0];
      const currentMarker = L.marker(currentLocation.coordinates, { icon: customIcon })
        .addTo(this.map)
        .bindPopup(`
          <div class="custom-popup">
            <div class="popup-header">
              <h3>${currentLocation.name}</h3>
              <span class="role">${currentLocation.role}</span>
            </div>
            <div class="popup-screenshot">
              <img src="${currentLocation.screenshot}" alt="${currentLocation.name} screenshot" />
            </div>
            <div class="popup-content">
              <p><i class="fas fa-map-marker-alt"></i> ${currentLocation.description}</p>
              <p><i class="fas fa-code"></i> ${currentLocation.technologies.join(', ')}</p>
            </div>
            <div class="popup-footer">
              <a href="mailto:your.email@example.com" class="contact-btn">
                <i class="fas fa-envelope"></i> Contact
              </a>
            </div>
          </div>
        `, {
          maxWidth: 350,
          className: 'custom-popup-container'
        })
        .openPopup();

      setTimeout(() => {
        this.map?.invalidateSize();
      }, 100);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}