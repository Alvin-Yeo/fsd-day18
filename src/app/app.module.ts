import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { SearhFormComponent } from './components/searh-form.component';
import { SearhListComponent } from './components/searh-list.component';
import { SearhResultComponent } from './components/searh-result.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimeHttpService } from './anime-http.service';
import { AnimeDatabase } from './anime.database';

// Lottie animation
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() { return player; }

const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'search-list', component: SearhListComponent },
  { path: 'search', component: SearhFormComponent },
  { path: 'search/:genre/:title', component: SearhResultComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearhFormComponent,
    SearhListComponent,
    SearhResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
    AnimeHttpService,
    AnimeDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
