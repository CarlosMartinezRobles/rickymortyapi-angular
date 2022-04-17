import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './pages/characters/components/character-list/character-list.component';
import { CharacterCardComponent } from './pages/characters/components/character-list/character-card/character-card.component';
import { LocationsListComponent } from './pages/locations/components/locations-list/locations-list.component';
import { LocationsCardComponent } from './pages/locations/components/locations-list/locations-card/locations-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCardComponent,
    LocationsListComponent,
    LocationsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
