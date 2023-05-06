import {Component, AfterViewInit} from '@angular/core';
import {DataStoreService} from "../../services/data-store.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {

  public isGameStarted: boolean = false;

  public player1Name: string = "";
  public player1Life: number = 3;

  public player2Name: string = "";
  public player2Life: number = 3;

  constructor(private dataStoreService: DataStoreService) {

  }

  ngAfterViewInit(): void {

    this.startNewGame();
  }

  private startNewGame(): void {

    const playerNames = this.dataStoreService.getPlayerNames();

    this.player1Name = playerNames.player1Name;
    this.player2Name = playerNames.player2Name;

    console.log(this.player1Name);
    console.log(this.player2Name);

    this.player1Life = 3;
    this.player2Life = 3;

    Promise.resolve().then(() => {
      this.isGameStarted = true;
    });
  }
}
