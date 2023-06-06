import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private menuMusic: HTMLAudioElement;
  private lastSeconds: HTMLAudioElement;

  constructor() {
    this.menuMusic = new Audio();
    this.lastSeconds = new Audio();
  }

  playMenuMusic(): void {
    this.menuMusic.src = "assets/sounds/menu-music.mp3";
    this.menuMusic.loop = true;

    this.menuMusic.load();
    this.menuMusic.play();
  }

  stopMenuMusic(): void {
    this.menuMusic.pause();
  }

  playNewQuestion(): void {
    const audio: HTMLAudioElement = new Audio();

    audio.src = "assets/sounds/new-question.mp3";

    audio.load();
    audio.play();
  }

  playLastSeconds(): void {
    this.lastSeconds.src = "assets/sounds/last-second.mp3";

    this.lastSeconds.load();
    this.lastSeconds.play();
  }

  stopLastSeconds(): void {
    this.lastSeconds.pause();
  }

  playWaiting(): void {
    const audio: HTMLAudioElement = new Audio();

    audio.src = "assets/sounds/waiting.mp3";

    audio.load();
    audio.play();
  }

  playCorrectAnswer(): void {
    const audio: HTMLAudioElement = new Audio();

    audio.src = "assets/sounds/correct-answer.mp3";

    audio.load();
    audio.play();
  }

  playWrongAnswer(): void {
    const audio: HTMLAudioElement = new Audio();

    audio.src = "assets/sounds/wrong-answer.mp3";

    audio.load();
    audio.play();
  }

  playWin(): void {
    const audio: HTMLAudioElement = new Audio();

    audio.src = "assets/sounds/win.mp3";

    audio.load();
    audio.play();
  }

  playNobodyWin(): void {
    const audio: HTMLAudioElement = new Audio();

    audio.src = "assets/sounds/nobody-win.mp3";

    audio.load();
    audio.play();
  }
}
