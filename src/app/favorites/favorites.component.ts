import { Component, OnInit} from '@angular/core';
import { Favorite } from '../models/Favorite';
import { FavoritesService } from './favorites.service';


@Component({
  selector: 'my-favorites',
  templateUrl: 'app/favorites/favorites.component.html',
  styleUrls: ['app/favorites/favorites.component.css']
})


export class FavoritesComponent implements OnInit{
  private favorites: Favorite[];
  newSymbol: string;

  constructor(private favoritesService: FavoritesService){ }

  ngOnInit(): void {
    //TODO: make this a promise eventually
      this.favorites = this.favoritesService.getFavorites();
  }

  saveFavorite(): void{
    if(this.newSymbol != undefined){
      let newFavorite = this.favoritesService.saveFavorite(this.newSymbol);
      this.newSymbol = '';
      // this.favorites .push(newFavorite);
    }
  }
}
