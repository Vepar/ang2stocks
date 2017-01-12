"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var favorites_service_1 = require('./favorites.service');
var FavoritesComponent = (function () {
    function FavoritesComponent(favoritesService) {
        this.favoritesService = favoritesService;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        //TODO: make this a promise eventually
        this.favorites = this.favoritesService.getFavorites();
    };
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'my-favorites',
            templateUrl: 'app/favorites/favorites.component.html',
            styleUrls: ['app/favorites/favorites.component.css']
        }), 
        __metadata('design:paramtypes', [favorites_service_1.FavoritesService])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=favorites.component.js.map