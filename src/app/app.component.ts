import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular-reflection';

  constructor() {
    //console.log("Hello");
    //this.title = 'Simon Davey';
    this.changeTitle("Netmatters Angular Reflection");
  }

  changeTitle(title:string):void {
    this.title = title;
  }
}
