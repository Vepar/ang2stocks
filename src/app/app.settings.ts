import { Injectable }  from '@angular/core';


@Injectable()
export class AppSettings{
  readonly stockServiceUrl: string = 'http://localhost:3010/api/';

  StockServiceUrl(): string {
    return this.stockServiceUrl;
  }
}
