import {Component, AfterViewInit} from '@angular/core';
import {DataStoreService} from "../../services/data-store.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {

  private player1Name: string = "";
  private player2Name: string = "";
  private player1Life: number = 3;
  private player2Life: number = 3;

  constructor(private dataStoreService: DataStoreService) {

  }

  ngAfterViewInit(): void {

    this.startNewGame();
  }

  private startNewGame(): void {

    const playerNames = this.dataStoreService.getPlayerNames();

    this.player1Name = playerNames.player1Name;
    this.player2Name = playerNames.player2Name;

    this.player1Life = 3;
    this.player2Life = 3;
  }
}
