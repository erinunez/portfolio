import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // CommonModule,
    AppRoutingModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
