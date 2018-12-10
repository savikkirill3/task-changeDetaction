import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadTimerComponent } from './head-timer/head-timer.component';
import { ButtonComponent } from './button/button.component';
import { PushComponent } from './push/push.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadTimerComponent,
    ButtonComponent,
    PushComponent,
    ChangeDetectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
