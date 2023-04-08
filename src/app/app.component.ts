import {Component} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('hidden => visible', animate('1s ease-in')),
      transition('visible => hidden', animate('1s ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'Matematik Asansörü';

  gameLoaded = false;
  mainMenuLoaded = false;
  splashScreenState = 'hidden';
  mainMenuState = 'hidden';

  constructor() {


  }

  onFullscreenClick() {

    this.gameLoaded = true;

    setTimeout(() => {
      this.splashScreenState = 'visible';
    }, 500);

    setTimeout(() => {
      this.splashScreenState = 'hidden';
    }, 5000);

    setTimeout(() => {
      this.mainMenuLoaded = true;
      this.mainMenuState = 'visible';
    }, 6000);
  }
}
