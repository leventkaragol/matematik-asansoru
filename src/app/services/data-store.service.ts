import {Injectable} from '@angular/core';
import * as elementaryQuestions from "../../assets/questions/elementary.json";
import * as intermediateQuestions from "../../assets/questions/intermediate.json";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private player1Name: string = "";
  private player2Name: string = "";

  constructor() {
  }

  setPlayerNames(player1Name: string, player2Name: string): void {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getPlayerNames(): { player1Name: string, player2Name: string } {
    return {
      player1Name: this.player1Name,
      player2Name: this.player2Name
    }
  }

  getElementaryQuestions(): { question: number, answer: number, fileName: string }[] {
    return elementaryQuestions;
  }

  getIntermediateQuestions(): { question: number, answer: number, fileName: string }[] {
    return intermediateQuestions;
  }
}
