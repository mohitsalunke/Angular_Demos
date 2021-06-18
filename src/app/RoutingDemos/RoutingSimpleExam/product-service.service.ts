import { Injectable } from '@angular/core';
import { product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
Products:product[]=[];
  getProducts()
  {
   // let Products:product[];
    this.Products=[
      {
        productId:1,
        name:"mohit",
        price:600
      },
      {
        productId:2,
        name:"mohit",
        price:600
      },
      {
        productId:3,
        name:"mohit",
        price:600
      }

      // new product(1,'memory card',3000),
      // new product(2,'mobile',50000),
      // new product(3,'tv',9000)

    ]
    return this.Products;
  }

//   public getProduct(id:number) {
//     let products:product[]=this.getProducts();
//     return products.find(p => p.productId==id);
// }

  constructor() { }
}
