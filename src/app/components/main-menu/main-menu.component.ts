import {Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import {AudioService} from "../../services/audio.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, OnDestroy {
  @Output() fullscreenClick = new EventEmitter<void>()
  @Output() startGameClick = new EventEmitter<void>()

  public newGameFormVisible: boolean = false;

  private audio: HTMLAudioElement;

  constructor(private audioService: AudioService) {
    this.audio = new Audio();
  }

  ngOnInit() {
    this.audioService.playMenuMusic();
  }

  ngOnDestroy() {
    this.audioService.stopMenuMusic();
  }

  onNewGameClick(): void {

    this.audioService.playButtonClick();

    this.newGameFormVisible = true;
  }

  onNewGameFormCloseClick(): void {

    this.newGameFormVisible = false;
  }

  onStartGameClick(): void {

    this.audioService.playButtonClick();

    this.newGameFormVisible = false;

    this.startGameClick.emit();
  }
}
