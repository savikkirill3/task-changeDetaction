import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  valueAdd: number = 1000;
  @Output('add') addedValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(): void {
    this.addedValue.emit(this.valueAdd);
  }
}
