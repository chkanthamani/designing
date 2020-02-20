import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss']
})
export class ProductDataComponent implements OnInit {
  products:any = [];
  constructor(private productservice:ScreenService) { }

  ngOnInit() {
    this.productservice.getproduct()
    .subscribe(data => this.products = data);
    console.log(this.products, 'asd');
  }

}
