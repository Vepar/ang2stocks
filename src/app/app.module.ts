import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StockDetailComponent } from './stockDetails/stockDetails.component';
import { BackButtonComponent } from './shared/backbutton/backbutton.component';
import { StockDatePicker } from './shared/datepicker/datepicker.component';

import { FavoritesService } from './favorites/favorites.service';
import { StockService } from './stock.service';
import { AppSettings } from './app.settings';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    DropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FavoritesComponent,
    StockDetailComponent,
    BackButtonComponent,
    StockDatePicker
   ],
   providers: [
     StockService,
     FavoritesService,
     AppSettings
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
