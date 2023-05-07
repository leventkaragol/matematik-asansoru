import {Injectable} from '@angular/core';
import * as elementaryQuestions from "../../assets/questions/elementary.json";
import * as intermediateQuestions from "../../assets/questions/intermediate.json";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private player1Name: string = "";
  private player2Name: string = "";

  private level: number = 0;

  constructor() {
  }

  setPlayerNames(player1Name: string, player2Name: string): void {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  setLevel(level: number): void {
    this.level = level;
  }

  getPlayerNames(): { player1Name: string, player2Name: string } {
    return {
      player1Name: this.player1Name,
      player2Name: this.player2Name
    }
  }

  getLevel(): number {
    return this.level;
  }

  getQuestions(): { fileName: string, answer: number }[] {

    if (this.level === 1) {

      return this.getElementaryQuestions();

    } else {

      return this.getIntermediateQuestions();
    }
  }

  getElementaryQuestions(): { fileName: string, answer: number }[] {
    return this.shuffleArray<{ fileName: string, answer: number }>(Array.from(elementaryQuestions));
  }

  getIntermediateQuestions(): { fileName: string, answer: number }[] {
    return this.shuffleArray<{ fileName: string, answer: number }>(Array.from(intermediateQuestions));
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
