import {Component, HostListener, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pre-load',
  templateUrl: './pre-load.component.html',
  styleUrls: ['./pre-load.component.css']
})
export class PreLoadComponent {
  @Output() onFullscreenClick = new EventEmitter<void>();
  @HostListener('click') onClick() {

    if (document.fullscreenEnabled) {

      document.documentElement.requestFullscreen();

      this.onFullscreenClick.emit();
    }
  }
}
