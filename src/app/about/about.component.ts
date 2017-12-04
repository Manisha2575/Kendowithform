import { Component, OnInit } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  address = new Address();
  constructor() { }

  ngOnInit() {
  }
 onSubmit(){
   alert("Thanks for Submitting"+ JSON.stringify(this.address));
 }
}
