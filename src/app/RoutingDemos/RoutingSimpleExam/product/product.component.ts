import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Products:product[]=[];

  constructor(private productservice:ProductServiceService) { }



  ngOnInit(): void {

    this.Products=this.productservice.getProducts();
  }

}
