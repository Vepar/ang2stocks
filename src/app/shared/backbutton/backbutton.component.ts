import { Component } from '@angular/core';

@Component({
  selector: 'back-button',
  template: `<i class='fa fa-arrow-circle-o-left fa-2x' aria-hidden='true' (click)='goBack();'></i>`,
  styleUrls: ['app/shared/backbutton/backbutton.component.css']
})


export class BackButtonComponent{
  goBack(): void {
    window.history.back();
  }
}
