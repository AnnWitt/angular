import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jss-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
superhero: string =''
  // deklaracja nad konstruktorem 
  constructor() { }

  ngOnInit(): void {
  }

}
