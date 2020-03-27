import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-hello-world',
  templateUrl: './comp-hello-world.component.html',
  styleUrls: ['./comp-hello-world.component.css']
})
export class CompHelloWorldComponent implements OnInit {


  title:string;

  constructor() {
    this.title="hello";
   }

  ngOnInit() {
  }

  showchanges(){
    this.title = "you there!!";
  }

}
