import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { ToastComponent } from '../shared/components/toast/toast.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    ToastComponent
  ],
  exports: [
    LayoutComponent,
    TopbarComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
