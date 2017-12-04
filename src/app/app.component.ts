import { Component } from '@angular/core';
import { stud } from './studentdetails/stud';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private gridData: any[] = stud;
}