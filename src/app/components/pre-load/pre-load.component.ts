import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pre-load',
  templateUrl: './pre-load.component.html',
  styleUrls: ['./pre-load.component.css']
})
export class PreLoadComponent {
  @Output() fullscreenClick = new EventEmitter<void>()
  onStartGameClick():void {

    if (document.fullscreenEnabled) {

      document.documentElement.requestFullscreen();

      this.fullscreenClick.emit();
    }
  }
}
