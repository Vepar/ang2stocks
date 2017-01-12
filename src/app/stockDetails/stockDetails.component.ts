import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';


import { StockService } from '../stock.service';
import { Stock } from '../models/Stock';
import { HistoricalDataRequest } from '../models/historicalDataRequest';
import { HistoryChartData } from '../models/historyChartData';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'stock-deails',
  templateUrl: 'app/stockDetails/stockDetails.component.html',
  styleUrls: ['app/stockDetails/stockDetails.component.css']
})


export class StockDetailComponent implements OnInit{
  stockSymbol: string;
  private sub: any;
  stock: Stock;
  historyChartData: HistoryChartData;
  selectedDuration: {} = {value: 'One Day', id: 1};
  durationSelections: any[] = [
    { value: 'One Day', id: 1},
    { value: 'One Month', id: 2},
    { value: 'One Year', id: 3},
    { value: 'Custom', id: 4},
  ]

  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  updateSelectedDuration(newDuration: any){
    // this.selectedDuration = durationSelections[newDuration];
    return false;
  }

  //get stock details
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      // let stockSymbol = this.route.params.getValue('symbol');
      let stockSymbol = params['symbol'];
      this.stockService.getStockDetails(stockSymbol)
        .then(stock => this.stock = stock);
    });

    //get historical data for chart
    this.route.params.forEach((params: Params) => {
      let stockSymbol = params['symbol'];
      let datepipe = new DatePipe('en-US');
      let currentDate = new Date();
      let historyrequest = new HistoricalDataRequest(stockSymbol,
        datepipe.transform(currentDate, 'yyyy-MM-dd'),
        datepipe.transform(currentDate.setFullYear(currentDate.getFullYear() - 1), 'yyyy-MM-dd'));

      this.stockService.getStockHistory(historyrequest)
        .then(history => this.historyChartData = new HistoryChartData(history));
    });
}

}
