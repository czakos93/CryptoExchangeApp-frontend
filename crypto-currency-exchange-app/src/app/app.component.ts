import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title: string = 'Crypto Currency Exchange App';
  showExchangRate: boolean = false;
  showExchaneValue: boolean = false;

  loadExchangeRateForm(clickEvent: MouseEvent) {
    this.showExchaneValue = false;
    this.showExchangRate = true;
  }

  loadExchangeValueForm(clickEvent: MouseEvent) {
    this.showExchangRate = false;
    this.showExchaneValue = true;
  }
}
