import { DatePipe } from '@angular/common';


export class HistoryChartData{

  constructor(private lcHistories: any[], private lcOptions?: any
    ,private lcColors?: any, private lcLegend?: boolean, private lcType?: string){
      this.createChartData(lcHistories);
      if(lcOptions != undefined) this.lineChartOptions = lcOptions;
      if(lcColors != undefined) this.lineChartColors = lcColors;
      if(lcLegend != undefined) this.lineChartLegend = lcLegend;
      if(lcType != undefined) this.lineChartType = lcType;
  }

  public chartData: any[] = [{data: [], label: 'Prices'}];

  public chartLabels: any[] = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };

  public lineChartColors: any = {
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  private createChartData(histories: any[]){
    // let chartDataObject = {};
    // let chartDataArray: any[] = [];
    let datepipe = new DatePipe('en-US');
    for(let i in histories){
      this.chartData[0].data[i] = histories[i].close;
      this.chartLabels[i] = datepipe.transform(histories[i].date, 'MM/dd');
    }
  }

}
