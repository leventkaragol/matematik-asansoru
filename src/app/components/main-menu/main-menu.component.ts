import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Output() fullscreenClick = new EventEmitter<void>()
  @Output() startGameClick = new EventEmitter<void>()

  newGameFormVisible: boolean = false;

  onNewGameClick(): void {

    this.newGameFormVisible = true;
  }

  onNewGameFormCloseClick(): void {

    this.newGameFormVisible = false;
  }

  onStartGameClick(): void {

    this.newGameFormVisible = false;

    this.startGameClick.emit();
  }
}
