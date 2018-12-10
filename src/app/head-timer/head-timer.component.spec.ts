import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTimerComponent } from './head-timer.component';

describe('HeadTimerComponent', () => {
  let component: HeadTimerComponent;
  let fixture: ComponentFixture<HeadTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
