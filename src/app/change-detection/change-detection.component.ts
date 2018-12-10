import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit, OnChanges {

  @Input() valueAdd: {num: number};
  begin: number = 0;
  count: number;

  start(): void {
    this.count = setInterval(() => {
        this.begin++;
        this.cd.detectChanges();
    }, 1000);
  }

  ngOnInit() {
    this.start();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.valueAdd && this.valueAdd.num) {
      this.begin += this.valueAdd.num;
      this.cd.detectChanges();
    }
  }

  constructor(private cd: ChangeDetectorRef) { }
}
