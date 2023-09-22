import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// preprocessor Directive

export class AppComponent {
  myField = ""
  title = 'first';
  name = 'Shubham';
  student = {
    name:"Shubham",
    class:"10"
  };
  arr=[1,2,3,4];
  togglename(){
    if(this.name==="Shubham"){
      this.name="Zaid";
    }
    else{
      this.name="Shubham";
    }
  }
  showArray=true;
  togglearray(){
    this.showArray=!this.showArray;
  }
  obj = {
    name:"hello",
    age:12,
    rno:23
  }
  // callme(x){
  //   console.log(x);
  // }

  employees=[
    {
      name:"ABC",
      empid:"1",
      salary:100
    },
    {
      name:"DEF",
      empid:"10",
      salary:1000
    },
    {
      name:"GHT",
      empid:"11",
      salary:120
    }
  ]

  flowers = ["roses", "lily", "marigold"];
  showFlowers = true;

  displayFlowers(){
    this.showFlowers = !this.showFlowers;
  }

  countries = [
    {"id" : 1, "name" : "India", "numberOfStates" : 29, "flag" : ""},
    {"id" : 2, "name" : "USA", "numberOfStates" : 50, "flag" : ""},
    {"id" : 3, "name" : "Canada", "numberOfStates" : 17, "flag" : ""}
  ];
}