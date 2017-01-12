"use strict";
var common_1 = require('@angular/common');
var HistoryChartData = (function () {
    function HistoryChartData(lcHistories, lcOptions, lcColors, lcLegend, lcType) {
        this.lcHistories = lcHistories;
        this.lcOptions = lcOptions;
        this.lcColors = lcColors;
        this.lcLegend = lcLegend;
        this.lcType = lcType;
        this.chartData = [{ data: [], label: 'Prices' }];
        this.chartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = {
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.createChartData(lcHistories);
        if (lcOptions != undefined)
            this.lineChartOptions = lcOptions;
        if (lcColors != undefined)
            this.lineChartColors = lcColors;
        if (lcLegend != undefined)
            this.lineChartLegend = lcLegend;
        if (lcType != undefined)
            this.lineChartType = lcType;
    }
    HistoryChartData.prototype.createChartData = function (histories) {
        // let chartDataObject = {};
        // let chartDataArray: any[] = [];
        var datepipe = new common_1.DatePipe('en-US');
        for (var i in histories) {
            this.chartData[0].data[i] = histories[i].close;
            this.chartLabels[i] = datepipe.transform(histories[i].date, 'MM/dd');
        }
    };
    return HistoryChartData;
}());
exports.HistoryChartData = HistoryChartData;
//# sourceMappingURL=historyChartData.js.map