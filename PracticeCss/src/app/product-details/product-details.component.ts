import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from '../screen.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products:any=[];
  product:any;
  // CartService: any;
  constructor(private route: ActivatedRoute,private productservice:ScreenService,private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.products[+params.get('Id')];
      this.product = this.product+1;
    });

    this.productservice.getproduct()
        .subscribe(data => this.products = data);
        console.log(this.products,'details');
  }
  

}
