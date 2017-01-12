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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var favorites_component_1 = require('./favorites/favorites.component');
var stockDetails_component_1 = require('./stockDetails/stockDetails.component');
var backbutton_component_1 = require('./shared/backbutton/backbutton.component');
var favorites_service_1 = require('./favorites/favorites.service');
var stock_service_1 = require('./stock.service');
var app_settings_1 = require('./app.settings');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                ng2_charts_1.ChartsModule,
                ng2_bootstrap_1.DropdownModule.forRoot(),
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                favorites_component_1.FavoritesComponent,
                stockDetails_component_1.StockDetailComponent,
                backbutton_component_1.BackButtonComponent
            ],
            providers: [
                stock_service_1.StockService,
                favorites_service_1.FavoritesService,
                app_settings_1.AppSettings
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map