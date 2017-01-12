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
var http_1 = require('@angular/http');
var app_settings_1 = require('./app.settings');
require('rxjs/add/operator/toPromise');
var StockService = (function () {
    function StockService(appSettings, http) {
        this.appSettings = appSettings;
        this.http = http;
        this.serviceUrl = appSettings.StockServiceUrl();
    }
    StockService.prototype.getStockDetails = function (symbol) {
        return this.http.get(this.serviceUrl + "stocks/" + symbol).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        ;
    };
    StockService.prototype.getStockHistory = function (historyRequest) {
        return this.http.get(this.serviceUrl + "stocks/historical?ticker=" + historyRequest.stockSymbol + "\n          &durationFrom=" + historyRequest.durationFrom + "&durationTo=" + historyRequest.durationTo).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StockService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    StockService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_settings_1.AppSettings, http_1.Http])
    ], StockService);
    return StockService;
}());
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map