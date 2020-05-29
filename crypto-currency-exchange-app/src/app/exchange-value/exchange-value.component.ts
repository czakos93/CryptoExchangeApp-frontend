import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-value',
  templateUrl: 'exchange-value.component.html',
  styles: [
  ]
})
export class ExchangeValueComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  exchangeValueForm: FormGroup;

  destinationCurrencies: Array<string> = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.exchangeValueForm = this.formBuilder.group({
      baseCurrency: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      amount: ['', [Validators.required]],
      destinationCurrencies: this.destinationCurrencies
    })
    this.exchangeValueForm.controls['destinationCurrencies'].setValue(this.destinationCurrencies);
  }

  submit(form: FormGroup): void {
    console.log(form);
  }

  addDestinationCurrency(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.destinationCurrencies.push(value.trim())
    }

    if (input) {
      input.value = '';
    }
  }

  removeDestinationCurrency(currency: string): void {
    const index = this.destinationCurrencies.indexOf(currency);

    if (index >= 0) {
      this.destinationCurrencies.splice(index, 1);
    }
  }
}
