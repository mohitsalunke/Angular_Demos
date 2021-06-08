import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-pipe-dynamic',
  templateUrl: './product-pipe-dynamic.component.html',
  styleUrls: ['./product-pipe-dynamic.component.css']
})
export class ProductPipeDynamicComponent implements OnInit {
  
  oid:number;
  oname:string;
  oprice:number;
  oqty:number;
  odis:number;
  objects:any[];


  constructor() {

   this.oid=0;
   this.oname="";
   this.oprice=0;
   this.oqty=0;
   this.odis=0;
   this.objects=[];

   }

   AddObject():void{
     this.objects.push({
     oid:this.oid,
     oname:this.oname,
     oprice:this.oprice,
     oqty:this.oqty,
     odis:this.odis  
     })

     this.oid=0;
     this.oname="";
     this.oprice=0;
     this.oqty=0;
     this.odis=0;
   }

  ngOnInit(): void {
  }

}
