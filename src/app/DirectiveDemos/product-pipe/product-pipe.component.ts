import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-pipe',
  templateUrl: './product-pipe.component.html',
  styleUrls: ['./product-pipe.component.css']
})
export class ProductPipeComponent implements OnInit {

  products:any[];

  constructor() { 

    this.products=[{
      pid:101,pname:"TV",price:45000,qty:15,dis:19
    },
    {
      pid:102,pname:"Mobile",price:50000,qty:10,dis:15
    },
    {
      pid:103,pname:"HeadPhones",price:1000,qty:15,dis:0
    },
    {
      pid:104,pname:"AC",price:2000,qty:10,dis:7
    }
  ]
  }

  ngOnInit(): void {
  }

}
