import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StockDetailComponent } from './stockDetails/stockDetails.component';
import { BackButtonComponent } from './shared/backbutton/backbutton.component';

import { FavoritesService } from './favorites/favorites.service';
import { StockService } from './stock.service';
import { AppSettings } from './app.settings';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    ChartsModule,
    DropdownModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FavoritesComponent,
    StockDetailComponent,
    BackButtonComponent
   ],
   providers: [
     StockService,
     FavoritesService,
     AppSettings
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
