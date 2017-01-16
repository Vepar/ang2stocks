import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'stock-date-picker',
  template: `<div class='stock-date-picker'>
    <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true" [dateDisabled]="dateDisabled"></datepicker>
  </div>`,
  styleUrls: ['app/shared/datepicker/datepicker.component.css']
})


export class StockDatePicker {
  public dt: Date = new Date();
  private minDate: Date = void 0;
  public dateDisabled: {date: Date, mode: string}[];
}
