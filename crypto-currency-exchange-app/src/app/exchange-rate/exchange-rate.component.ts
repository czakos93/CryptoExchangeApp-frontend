import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, FormControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: 'exchange-rate.component.html',
  styles: [
  ]
})
export class ExchangeRateComponent implements OnInit {

  private currencyValidators: Array<ValidatorFn> = [Validators.required, Validators.minLength(3), Validators.maxLength(3)];

  exchangeRateForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.exchangeRateForm = this.formBuilder.group({
      baseCurrency: ['', this.currencyValidators],
      filteredCurrencies: this.formBuilder.array([])
    })
  }

  getFilteredCurrencies(): FormArray {
    return this.exchangeRateForm.get('filteredCurrencies') as FormArray;
  }

  addFilteredCurrency(): void {
    this.getFilteredCurrencies().push(new FormControl('', this.currencyValidators))
  }

  removeFilteredCurrency(index: number): void {
    this.getFilteredCurrencies().removeAt(index)
  }

  submitForm(form: FormGroup): void {
    console.log(form) //TODO call to API
  }
}
