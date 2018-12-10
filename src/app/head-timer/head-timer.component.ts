import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-head-timer',
  templateUrl: './head-timer.component.html',
  styleUrls: ['./head-timer.component.css']
})
export class HeadTimerComponent implements OnInit, OnChanges {
  @Input() valueAdd: { num: number };
  begin: number = 0;
  count: number;

  start(): void {
    this.count = setInterval(() => {
      this.begin++;
    }, 1000);
  }

  ngOnInit() {
    this.start();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.valueAdd && this.valueAdd.num) {
      this.begin += this.valueAdd.num;
    }
  }

  constructor() {
  }
}
