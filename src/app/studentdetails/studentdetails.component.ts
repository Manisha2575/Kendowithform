import { Component, OnInit } from '@angular/core';
import { stud } from './stud';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent{
  private gridData: any[] = stud;
}

