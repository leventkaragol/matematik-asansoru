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
  public player1ElevatorPosition: string = "700px";

  public player2Name: string = "";
  public player2Life: number = 3;
  public player2ElevatorPosition: string = "700px";

  public remainingTime: number = 30;
  public remainingTimeText: string = "00:30";

  private timerController: any;

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

    this.player1ElevatorPosition = this.calculateElevatorPosition(this.player1Life);
    this.player2ElevatorPosition = this.calculateElevatorPosition(this.player2Life);

    this.startTimer();

    Promise.resolve().then(() => {

      this.isGameStarted = true;
    });
  }

  private startTimer(): void {

    this.remainingTime = 10;

    this.timerController = setInterval(() => {

      this.remainingTime--;
      this.remainingTimeText = "00:" + (this.remainingTime < 10 ? "0" + this.remainingTime : this.remainingTime);

      if (this.remainingTime === 0) {

        clearInterval(this.timerController);

        this.player1Life--;
        this.player2Life--;

        this.player1ElevatorPosition = this.calculateElevatorPosition(this.player1Life);
        this.player2ElevatorPosition = this.calculateElevatorPosition(this.player2Life);

        if (this.player1Life === 0 || this.player2Life === 0) {

          // TODO: İki oyuncudan biri kaybetti

        } else {

          // TODO: Yeni soru sorulacak
        }
      }

    }, 1000);
  }

  private calculateElevatorPosition(life: number): string {

    switch (life) {
      case 0:
        return "1800px";
      case 1:
        return "933px";
      case 2:
        return "816px";
      case 3:
        return "700px";
      case 4:
        return "583px";
      case 5:
        return "466px";
      case 6:
        return "350px";
      default:
        console.log(`Hatalı can değeri ${life}`);
        throw new Error(`Hatalı can değeri ${life}`);
    }
  }
}
