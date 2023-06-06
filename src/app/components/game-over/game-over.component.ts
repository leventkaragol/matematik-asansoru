import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {DataStoreService} from "../../services/data-store.service";
import {AudioService} from "../../services/audio.service";

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

  constructor(private dataStoreService: DataStoreService, private audioService: AudioService) {
  }

  ngAfterViewInit(): void {

    const playerNames = this.dataStoreService.getPlayerNames();

    if (this.winner === "player1") {

      setTimeout(() => {

        this.playerName = playerNames.player1Name;
        this.player1Won = true;

        this.audioService.playWin();
      });

    } else if (this.winner === "player2") {

      setTimeout(() => {

        this.playerName = playerNames.player2Name;
        this.player2Won = true;

        this.audioService.playWin();
      });

    } else if (this.winner === "none") {

      setTimeout(() => {

        this.playerName = "";
        this.noPlayerWon = true;

        this.audioService.playNobodyWin();
      });
    }
  }

  onCloseClick(): void {

    this.closeClick.emit();
  }

  onNewGameClick(): void {

    this.newGameClick.emit();
  }
}
