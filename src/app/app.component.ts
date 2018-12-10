import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valueAdd: {num: number};
  constructor() { }

  add(value: number) {
    this.valueAdd = {num: value};
  }
}
