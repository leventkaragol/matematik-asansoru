import {Component, HostListener, AfterViewInit} from '@angular/core';
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

  public givenAnswer: number = 0;
  public correctAnswer: number = 0;
  public answeredPlayer: number = 0;

  private timerController: any;

  private level: number = 0;

  private questionList: { fileName: string, answer: number }[] = [];
  private currentQuestion?: { fileName: string, answer: number } = undefined;
  public currentQuestionImage: string = "";

  constructor(private dataStoreService: DataStoreService) {

  }

  ngAfterViewInit(): void {

    this.startNewGame();
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {

    if (event.code === "Digit1") {

      this.givenAnswer = 1;
      this.answeredPlayer = 1;

    } else if (event.code === "Digit2") {

      this.givenAnswer = 2;
      this.answeredPlayer = 1;

    } else if (event.code === "Digit3") {

      this.givenAnswer = 3;
      this.answeredPlayer = 1;

    } else if (event.code === "Digit4") {

      this.givenAnswer = 4;
      this.answeredPlayer = 1;

    } else if (event.code === "Numpad1") {

      this.givenAnswer = 1;
      this.answeredPlayer = 2;

    } else if (event.code === "Numpad2") {

      this.givenAnswer = 2;
      this.answeredPlayer = 2;

    } else if (event.code === "Numpad3") {

      this.givenAnswer = 3;
      this.answeredPlayer = 2;

    } else if (event.code === "Numpad4") {

      this.givenAnswer = 4;
      this.answeredPlayer = 2;
    }

    clearInterval(this.timerController);

    // TODO: Heyecanlı bir müzik çalınacak

    setTimeout(() => {

      if (this.currentQuestion) {

        this.correctAnswer = this.currentQuestion.answer;

        if (this.answeredPlayer === 1) {

          if (this.givenAnswer === this.correctAnswer) {

            this.player1Life++;
            this.player2Life--;

          } else {

            this.player1Life--;
            this.player2Life++;
          }

        } else {

          if (this.givenAnswer === this.correctAnswer) {

            this.player1Life--;
            this.player2Life++;

          } else {

            this.player1Life++;
            this.player2Life--;
          }
        }

        this.player1ElevatorPosition = this.calculateElevatorPosition(this.player1Life);
        this.player2ElevatorPosition = this.calculateElevatorPosition(this.player2Life);

        // Asanstör animasyonu oynatılacak

        setTimeout(() => {

          this.askNewQuestion();

        }, 5000);
      }

    }, 5000);
  }

  private startNewGame(): void {

    const playerNames = this.dataStoreService.getPlayerNames();

    this.player1Name = playerNames.player1Name;
    this.player2Name = playerNames.player2Name;

    this.level = this.dataStoreService.getLevel();

    this.questionList = this.dataStoreService.getQuestions();

    this.player1Life = 3;
    this.player2Life = 3;

    this.player1ElevatorPosition = this.calculateElevatorPosition(this.player1Life);
    this.player2ElevatorPosition = this.calculateElevatorPosition(this.player2Life);

    this.askNewQuestion();

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

          this.askNewQuestion();
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

  private askNewQuestion(): void {

    this.currentQuestion = this.questionList.pop();

    if (this.currentQuestion) {

      if (this.level === 1) {

        this.currentQuestionImage = `assets/questions/elementary/${this.currentQuestion.fileName}`;

      } else {

        this.currentQuestionImage = `assets/questions/intermediate/${this.currentQuestion.fileName}`;
      }

      this.givenAnswer = 0;
      this.answeredPlayer = 0;
      this.correctAnswer = 0;

      this.remainingTime = 10;
      this.remainingTimeText = "00:" + (this.remainingTime < 10 ? "0" + this.remainingTime : this.remainingTime);

      this.startTimer();

    } else {

      // TODO: Soru bitmiş
    }
  }
}
