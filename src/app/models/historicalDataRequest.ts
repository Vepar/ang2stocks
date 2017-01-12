export class HistoricalDataRequest{


  constructor(stockSymbol: string, durationTo: string, durationFrom: string){
    this.stockSymbol = stockSymbol;
    this.durationTo = durationTo;
    this.durationFrom = durationFrom;
  }

  durationTo: string;
  durationFrom: string;
  stockSymbol: string;
}
