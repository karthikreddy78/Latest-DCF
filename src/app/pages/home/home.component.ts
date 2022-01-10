import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CouponLatest } from 'src/app/models/coupon-latest.model';
import { CouponNew } from 'src/app/models/coupon-new.model';
import { Coupon } from 'src/app/models/coupon.model';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    
  }





}
