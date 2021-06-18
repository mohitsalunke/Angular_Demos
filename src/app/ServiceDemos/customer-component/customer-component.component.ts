import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { customer } from './customer';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css'],
  providers:[CustomerServiceService]
})
export class CustomerComponentComponent {
  value:any;
  flag:boolean=false;
  customers:customer[]=[];
  customer={
    cid:0,
    cname:"",
    caddress:""
  }

  
  constructor(private serObj:CustomerServiceService) { }

  addCustomer(custdata:any){
    if(!this.flag)
    {
      this.value=custdata;
    this.serObj.addCust(custdata);
    this.customers=this.serObj.CustomerArr;
    }
    else{
      this.flag=true;
      
    }
    


  }

  edit(i:number){
    this.flag=true;
    // this.serObj.editdata(i);



  }

  remove(custdata:any)
  {
    this.serObj.removedata(custdata);
  }

  update()
  {
    this.flag=false;
    this.serObj.updatedata();
  }

 

}
