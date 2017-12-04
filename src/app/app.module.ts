import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import {  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { DescriptionComponent } from './description/description.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import 'hammerjs';
import { MatDialogModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    DescriptionComponent,
    AboutComponent,
    PagenotfoundComponent,
    StudentsComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule, 
    GridModule, 
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
