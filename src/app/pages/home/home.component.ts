import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  rate: number;
  
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  get user() {
    return this.userService.getUser();
  }

  ngOnInit(): void {
    this.bitcoinService.getRate(this.user.currency).subscribe((data: number) => {
      this.rate = 1 / data;
    });
  }
}
