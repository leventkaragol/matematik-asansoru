import {Component, EventEmitter, Output} from '@angular/core';
import {DataStoreService} from "../../services/data-store.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Output() closeClick = new EventEmitter<void>()
  @Output() startGameClick = new EventEmitter<void>()

  public player1Name: string = "";
  public player2Name: string = "";

  public isElementarySelected: boolean = true;
  public isIntermediateSelected: boolean = false;

  constructor(private dataStoreService: DataStoreService) {

  }

  onCloseClick(): void {

    this.closeClick.emit();
  }

  onStartGameClick(): void {

    this.dataStoreService.setPlayerNames(this.player1Name, this.player2Name);

    this.dataStoreService.setLevel(this.isElementarySelected ? 1 : 2);

    this.startGameClick.emit();
  }

  selectElementary(): void {

    this.isElementarySelected = true;
    this.isIntermediateSelected = false;
  }

  selectIntermediate(): void {

    this.isElementarySelected = false;
    this.isIntermediateSelected = true;
  }
}
