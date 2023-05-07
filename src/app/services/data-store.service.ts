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

  getElementaryQuestions(): { fileName: string, answer: number }[] {
    return this.shuffleArray<{ fileName: string, answer: number }>(elementaryQuestions);
  }

  getIntermediateQuestions(): { fileName: string, answer: number }[] {
    return this.shuffleArray<{ fileName: string, answer: number }>(intermediateQuestions);
  }

  private shuffleArray<T>(array: T[]): T[] {

    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;


      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
