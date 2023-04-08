import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GameComponent } from './components/game/game.component';
import { NewGameComponent } from './components/shared/new-game/new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    MainMenuComponent,
    GameComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
