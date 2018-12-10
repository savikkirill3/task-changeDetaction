import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit, OnChanges {
  @Input() valueAdd: {num: number};
  begin: number = 0;
  interval: number;

  start(): void {
    this.interval = setInterval(() => {
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

  constructor() { }

}
