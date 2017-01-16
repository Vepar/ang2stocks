import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';


import { StockService } from '../stock.service';
import { Stock } from '../models/Stock';
import { HistoricalDataRequest } from '../models/historicalDataRequest';
import { HistoryChartData } from '../models/historyChartData';
import {StockDatePicker } from '../shared/datepicker/datepicker.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'stock-details',
  templateUrl: 'app/stockDetails/stockDetails.component.html',
  styleUrls: ['app/stockDetails/stockDetails.component.css']
})


export class StockDetailComponent implements OnInit{
  stockSymbol: string;
  private sub: any;
  stock: Stock;
  historyChartData: HistoryChartData;
  selectedDuration= {value: 'One Year', id: 3};
  durationSelections: any[] = [
    { value: 'One Day', id: 1},
    { value: 'One Month', id: 2},
    { value: 'One Year', id: 3},
    { value: 'Custom', id: 4},
  ]
  durationTo: string;
  durationFrom: string;

  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  updateSelectedDuration(newDurationId: any){
    this.selectedDuration = this.durationSelections.find(selection => selection.id === newDurationId);

    this.sendHistoryRequest();
  }

  sendHistoryRequest(): void{
    let historyrequest = new HistoricalDataRequest(this.stockSymbol, this.selectedDuration.id);

    this.stockService.getStockHistory(historyrequest)
      .then(history => this.historyChartData = new HistoryChartData(history));

    this.durationTo = historyrequest.getDurationTo();
    this.durationFrom = historyrequest.getDurationFrom();
  }

  //get stock details
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      // let stockSymbol = this.route.params.getValue('symbol');
      this.stockSymbol = params['symbol'];
      this.stockService.getStockDetails(this.stockSymbol)
        .then(stock => this.stock = stock);
    });

    //get historical data for chart
    this.route.params.forEach((params: Params) => {
      this.stockSymbol = params['symbol'];
      this.sendHistoryRequest();
    });
  }
}
