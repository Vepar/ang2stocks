import { Favorite } from '../models/Favorite';
import { Injectable }  from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FavoritesService{
  private favorites: Favorite[];

  constructor(private http: Http) {
    this.favorites = [];
    this.favorites.push({symbol: "GOOG", name: "Alphabet Inc."},
      {symbol: "PFE", name: "Pfizer"},
      {symbol: "AAPL", name: "Apple Inc."},
      {symbol: "VIX", name: "Volativity"});
  }

  getFavorites(){
    return this.favorites;
  }

}
