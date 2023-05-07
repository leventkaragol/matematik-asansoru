import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private menuMusic: HTMLAudioElement;

  constructor() {
    this.menuMusic = new Audio();
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

  playButtonClick(): void {
    const buttonAudio: HTMLAudioElement = new Audio();

    buttonAudio.src = "assets/sounds/button-click.wav";

    buttonAudio.load();
    buttonAudio.play();
  }
}
