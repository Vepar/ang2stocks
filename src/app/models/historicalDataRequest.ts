import { DatePipe } from '@angular/common';

export class HistoricalDataRequest{


  constructor(stockSymbol: string, durationId: number){
    this.stockSymbol = stockSymbol;
    this.durationId = durationId;
  }

  private durationId: number;
  stockSymbol: string;


  getDurationFrom(): string{
    let currentDate = new Date();
    let datepipe = new DatePipe('en-US');

    switch(this.durationId){
      case 1: //day
        return datepipe.transform(currentDate.setDate(currentDate.getDay() - 1), 'yyyy-MM-dd');
      case 2: //month
        return datepipe.transform(currentDate.setMonth(currentDate.getMonth() - 1), 'yyyy-MM-dd');
      case 3: //year
        return datepipe.transform(currentDate.setFullYear(currentDate.getFullYear() - 1), 'yyyy-MM-dd');
      case 4: //custom
        return datepipe.transform(currentDate.setFullYear(currentDate.getFullYear() - 1), 'yyyy-MM-dd');

      default:
        return datepipe.transform(currentDate, 'yyyy-MM-dd');
    }
  }

  getDurationTo(){
    let currentDate = new Date();
    let datepipe = new DatePipe('en-US');

    return datepipe.transform(currentDate, 'yyyy-MM-dd');
  }
}
