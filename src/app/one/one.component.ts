import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jss-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})

//export class OneComponent implements OnInit {
export class OneComponent {
  list=['one,two,three'];
  //domyslnie public, jakby bylo private to by sie html nie mogl dsotac
//@Input() variable: string;
  stringVariable: string = 'bla bla bla'; //zalcany ' alw i " ok"
  numberVariable: number = 4;
  booleanVariable: boolean = true;
  arrayOfString: string[] = ['a', 'd', 'f'];
  secondArrayOfString: Array<number> = [4, 5, 6];
  variableAsNull = null;
  simplestObject={klucz: 'wartosc', klucz2:'wartosc2'}; //najprostszy obiekt

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

  
  arrayOfObjectsI: Array<IObject> = [{ name: 'Imie', age: 20 },{ name: 'Imie2', age: 22 }];

//--------------
moviesArray = [
  {
    name: 'Robin Hood',
    department: '',
    manager: null,
    salary: 200
  },
  {
    name: 'Arsene Wenger',
    department: 'Bar',
    manager: 'Friar Tuck',
    salary: 50
  },
  {
    name: 'Friar Tuck',
    department: 'Foo',
    manager: 'Robin Hood',
    salary: 100
  },
  {
    name: 'Little John',
    department: 'Foo',
    manager: 'Robin Hood',
    salary: 100
  },
  {
    name: 'Sam Allardyce',
    department: '',
    manager: null,
    salary: 250
  },
  {
    name: 'Dimi Berbatov',
    department: 'Foo',
    manager: 'Little John',
    salary: 50
  }
]

//-----------
moviesObject = {
  one: {
    name: 'Robin Hood',
    department: '',
    manager: null,
    salary: 200
  },
  two: {
    name: 'Arsene Wenger',
    department: 'Bar',
    manager: 'Friar Tuck',
    salary: 50
  },
  three: {
    name: 'Friar Tuck',
    department: 'Foo',
    manager: 'Robin Hood',
    salary: 100
  },
  four: {
    name: 'Little John',
    department: 'Foo',
    manager: 'Robin Hood',
    salary: 100
  },
  five: {
    name: 'Sam Allardyce',
    department: '',
    manager: null,
    salary: 250
  },
  six: {
    name: 'Dimi Berbatov',
    department: 'Foo',
    manager: 'Little John',
    salary: 50
  }
}







  private youCantTouchThisInHTML = "nope, you can't"; //backslash aby nie odczytal jako element skladni


  //consturctor do dodawania dependencies
  
  //let i const(==final) deklarowanie w tekscie

  functionNotDoingMuch(): number {
    ///typ zwracamy
    let a: number = 4;
    a = 7; //zmieni
    const b: number = 10;
    //b=3; nie pojdzie bo constant
    console.log(`type  ${typeof b} b`);
    return a + b;
  }
}

interface IObject {
  //wzorzec nazewnictwa
  name: string;
  age: number;
}

enum Numbers {
  ONE = 1,
  TWO = 2,
}

class Person {
  private name;
  private age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//generyki
//class Format<T> {
//  content:T
//}
