import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate(currency = 'USD')  {
    return this.http.get(`https://blockchain.info/tobtc?currency=${currency}&value=1`)
  }

  public getMarketPrice() {
    console.log('getMarketPrice');
  }

  public getConfirmedTransactions() {
    console.log('getConfirmedTransactions');
  }
}
