import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-service-using-http-client',
  templateUrl: './service-using-http-client.component.html',
  styleUrls: ['./service-using-http-client.component.css'],
  providers:[HttpServiceService]
})
export class ServiceUsingHttpClientComponent implements OnInit {

  Data:any=[]
  constructor(private serObj:HttpServiceService) { }

  getUserData()
  {
    
    this.serObj.getUser().subscribe((result:any) =>{
      console.log("result =",result);
      this.Data=result
      console.log("data =",this.Data);
    },
    (errors:any) =>{
      console.log("Error =",errors);
    }
    )
  }

  
  

  ngOnInit(): void {
  }

}
