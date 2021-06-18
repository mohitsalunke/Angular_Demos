import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-name-details',
  templateUrl: './product-name-details.component.html',
  styleUrls: ['./product-name-details.component.css']
})
export class ProductNameDetailsComponent implements OnInit {
  product:any[]=[];
  productlist:any;
  constructor(private serobj:ProductServiceService,private activeroute:ActivatedRoute,private r:Router) { }

  ngOnInit(): void {

    let prod=this.activeroute.snapshot.params['productId'];
    this.product=this.serobj.getProducts();
    for(let i=0;i<this.product.length;i++)
    {
      if(prod==this.product[i].productId)
      {
         this.productlist=this.product[i];
      }
    }
  }

  onBack()
  {
    this.r.navigate(['Home']);
  }

}
