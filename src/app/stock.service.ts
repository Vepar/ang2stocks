import { Stock } from './models/Stock';
import { Injectable }  from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from './app.settings';
import { HistoricalDataRequest } from './models/historicalDataRequest';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class StockService{
    private serviceUrl: string;

    constructor(private appSettings: AppSettings, private http: Http){
      this.serviceUrl = appSettings.StockServiceUrl();
    }

    getStockDetails(symbol: string): Promise<Stock>{
      return this.http.get(`${this.serviceUrl}stocks/${symbol}`).toPromise()
        .then(response => response.json() as Stock)
        .catch(this.handleError);;
    }

    getStockHistory(historyRequest: HistoricalDataRequest): Promise<any>{
      return this.http.get(`${this.serviceUrl}stocks/historical?ticker=${historyRequest.stockSymbol}
          &durationFrom=${historyRequest.durationFrom}&durationTo=${historyRequest.durationTo}`).toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}
