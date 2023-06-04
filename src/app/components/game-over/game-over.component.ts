import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {DataStoreService} from "../../services/data-store.service";

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements AfterViewInit {
  @Output() closeClick = new EventEmitter<void>()
  @Output() newGameClick = new EventEmitter<void>()
  @Input() winner: string = "";

  public player1Won: boolean = false;
  public player2Won: boolean = false;
  public noPlayerWon: boolean = false;
  public playerName: string = "";

  constructor(private dataStoreService: DataStoreService) {

  }

  ngAfterViewInit(): void {

    const playerNames = this.dataStoreService.getPlayerNames();

    if (this.winner === "player1") {

      this.playerName = playerNames.player1Name;
      this.player1Won = true;

    } else if (this.winner === "player2") {

      this.playerName = playerNames.player2Name;
      this.player2Won = true;

    } else if (this.winner === "none") {

      this.playerName = "";
      this.noPlayerWon = true;
    }
  }

  onCloseClick(): void {

    this.closeClick.emit();
  }

  onNewGameClick(): void {

    this.newGameClick.emit();
  }
}
