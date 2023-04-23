import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Output() closeClick = new EventEmitter<void>()
  @Output() startGameClick = new EventEmitter<void>()

  onCloseClick(): void {

    this.closeClick.emit();
  }

  onStartGameClick(): void {

    alert("Oyuna Başlanacak");

    this.startGameClick.emit();
  }
}
