import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jss-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})

//export class OneComponent implements OnInit {
export class OneComponent {
  //domyslnie public, jakby bylo private to by sie html nie mogl dsotac

  stringVariable: string = 'bla bla bla'; //zalcany ' alw i " ok"
  numberVariable: number = 4;
  booleanVariable: boolean = true;
  arrayOfString: string[] = ['a', 'd', 'f'];
  secondArrayOfString: Array<number> = [4, 5, 6];
  variableAsNull = null;

  template2LiteralVariable = `co chcemy :) `;
  templateLiteralVariable = `5 +4 = ${5 + this.numberVariable}`; //w ${} jest kod wykonywalny

  variableAsUndefined: unknown = undefined; //cos przychodzi ale nie znamy typu
  //dddd
  //dddd ctrl alt i strzalkami i mozna w kilku jednoczesnic
  //dddd

  //po co unknown
  //someFunction(a: string,b?:number,c?:string) jak chcemy a i c to po kolei ale b undef
  arrayOfUnknown: Array<unknown> = [true, 3, 'ddd'];
  objectVariable: object = { name: 'maple', type: 'tree' };
  arrayOfNumbersAndString: Array<number | string> = [1, 2, 3, '4']; //typ numer lb string
  arrayOfObjects: { name: string; age: number }[] = [{ name: 'Imie', age: 20 }];
  arrayOfObjects2: Array<{ name: string; age: number }> = [
    { name: 'Imie', age: 20 },
  ];

  private youCantTouchThisInHTML = "nope, you can't"; //backslash aby nie odczytal jako element skladni

//let i const(==final) deklarowanie w tekscie

functionNotDoingMuch():number{ ///typ zwracamy
let a: number=4;
a=7; //zmieni
const b:number=10;
//b=3; nie pojdzie bo constant

}

}
