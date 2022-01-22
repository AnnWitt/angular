import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jss-root',
  //template: '<h3>napis z komponentu</h3>'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`.changeColor { //albo tak albo z pliku components
    //background-color: red;
//}`]
})
export class AppComponent {
  title = 'my-project';
}
