import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  CustomerArr:any=[];
  index:number=0;
  cid:number=0;
  cname:string="";
  caddress:string="";



  constructor() { }

  addCust(custdata:any)
  {
    this.CustomerArr.push(custdata);

    this.cid=0;
  this.cname="";
  this.caddress="";

  }

  removedata(custdata:any){
    this.CustomerArr.splice(custdata,1);
  }

  editdata(i:number)
  {
    this.index=i;
    this.cid=this.CustomerArr[i].cid;
    this.cname=this.CustomerArr[i].cname;
    this.caddress=this.CustomerArr[i].caddress;
  }

  updatedata(){
    this.CustomerArr[this.index].cid=this.cid;
    this.CustomerArr[this.index].cname=this.cname;
    this.CustomerArr[this.index].caddress=this.caddress;
    this.cid=0;
  this.cname="";
  this.caddress="";
  }
}
