import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


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
    // FormsModule,
    CommonModule,
    LayoutRoutingModule,

  ],
  exports: [LayoutComponent, TopbarComponent,ContentComponent, FooterComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LayoutComponent),
      multi: true
    }
  ]
})
export class LayoutModule { }
