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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var stock_service_1 = require('../stock.service');
var historicalDataRequest_1 = require('../models/historicalDataRequest');
var historyChartData_1 = require('../models/historyChartData');
var StockDetailComponent = (function () {
    function StockDetailComponent(stockService, route) {
        this.stockService = stockService;
        this.route = route;
        this.selectedDuration = { value: 'One Day', id: 1 };
        this.durationSelections = [
            { value: 'One Day', id: 1 },
            { value: 'One Month', id: 2 },
            { value: 'One Year', id: 3 },
            { value: 'Custom', id: 4 },
        ];
    }
    StockDetailComponent.prototype.updateSelectedDuration = function (newDuration) {
        this.selectedDuration = durationSelections[newDuration];
        return false;
    };
    //get stock details
    StockDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            // let stockSymbol = this.route.params.getValue('symbol');
            var stockSymbol = params['symbol'];
            _this.stockService.getStockDetails(stockSymbol)
                .then(function (stock) { return _this.stock = stock; });
        });
        //get historical data for chart
        this.route.params.forEach(function (params) {
            var stockSymbol = params['symbol'];
            var datepipe = new common_1.DatePipe('en-US');
            var currentDate = new Date();
            var historyrequest = new historicalDataRequest_1.HistoricalDataRequest(stockSymbol, datepipe.transform(currentDate, 'yyyy-MM-dd'), datepipe.transform(currentDate.setFullYear(currentDate.getFullYear() - 1), 'yyyy-MM-dd'));
            _this.stockService.getStockHistory(historyrequest)
                .then(function (history) { return _this.historyChartData = new historyChartData_1.HistoryChartData(history); });
            console.log('ok');
        });
    };
    StockDetailComponent = __decorate([
        core_1.Component({
            selector: 'stock-deails',
            templateUrl: 'app/stockDetails/stockDetails.component.html',
            styleUrls: ['app/stockDetails/stockDetails.component.css']
        }), 
        __metadata('design:paramtypes', [stock_service_1.StockService, router_1.ActivatedRoute])
    ], StockDetailComponent);
    return StockDetailComponent;
}());
exports.StockDetailComponent = StockDetailComponent;
//# sourceMappingURL=stockDetails.component.js.map