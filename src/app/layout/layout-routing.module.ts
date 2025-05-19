import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './content/home/home.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContactsComponent } from './content/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contacts', component: ContactsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
