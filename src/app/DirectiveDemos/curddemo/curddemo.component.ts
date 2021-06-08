import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curddemo',
  templateUrl: './curddemo.component.html',
  styleUrls: ['./curddemo.component.css']
})
export class CURDDemoComponent  {

  pid:number;
  pname:string;
  price:number;
  productsArr:any[];
  selectedindex:number;
  isadded:boolean=true;
  isedited:boolean;

  constructor()
  {
    this.pid=0;
    this.pname="";
    this.price=0;
    this.productsArr=[];
    this.selectedindex=0;
    this.isadded=true;
    this.isedited=true;
    

  }

  

  AddData():void{

    this.isadded=true;
    this.productsArr.push({

      pid:this.pid,
      pname:this.pname,
      price:this.price
         

    });

    this.pid=0;
    this.pname='';
    this.price=0;
    console.log(this.productsArr);
    console.log(this.productsArr.length);

  }
 
  remove(i:number){
    this.productsArr.splice(i,1);
  }
     
  edit(i:number){
    this.isedited=true;
    this.isadded=false;
    this.selectedindex=i;
    this.pid=this.productsArr[i].pid;
    this.pname=this.productsArr[i].pname;
    this.price=this.productsArr[i].price;

  
  }

  UpdateData(){
    this.isedited = false;
    this.isadded = true;
    this.productsArr[this.selectedindex].pid = this.pid;
    this.productsArr[this.selectedindex].name = this.pname;
    this.productsArr[this.selectedindex].price = this.price;

    this.pid=0;
    this.pname='';
    this.price=0;
}

  

  

}
