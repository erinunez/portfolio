import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    LayoutComponent,
    TopbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
