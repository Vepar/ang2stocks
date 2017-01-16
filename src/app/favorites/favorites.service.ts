import { Favorite } from '../models/Favorite';
import { Injectable }  from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FavoritesService{
  private favorites: Favorite[];

  constructor(private http: Http) {
    this.favorites = [];
    this.favorites.push({symbol: "GOOG"},
      {symbol: "PFE"},
      {symbol: "AAPL"},
      {symbol: "VIX"});
  }

  getFavorites(){
    return this.favorites;
  }

  saveFavorite(newSymbol: string): Favorite{
    let newFavorite = new Favorite(newSymbol);
    this.favorites.push(newFavorite);
    return newFavorite;
  }
}
