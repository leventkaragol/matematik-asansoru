import {Component, EventEmitter, Output} from '@angular/core';
import {DataStoreService} from "../../../services/data-store.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Output() closeClick = new EventEmitter<void>()
  @Output() startGameClick = new EventEmitter<void>()

  player1Name: string = "Esma";
  player2Name: string = "Ayşe";

  constructor(private dataStoreService: DataStoreService) {

  }

  onCloseClick(): void {

    this.closeClick.emit();
  }

  onStartGameClick(): void {

    this.dataStoreService.setPlayerNames(this.player1Name, this.player2Name);

    this.startGameClick.emit();
  }
}
