import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  animationOptions: AnimationOptions = {
    path: 'assets/notification-V4.json',
  };
}
