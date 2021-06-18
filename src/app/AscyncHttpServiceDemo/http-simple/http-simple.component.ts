import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-simple',
  templateUrl: './http-simple.component.html',
  styleUrls: ['./http-simple.component.css']
})
export class HttpSimpleComponent {
   apiRoot :string="https://httpbin.org";




  constructor(private http:HttpClient) { }

  doGet() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    console.log(url);
  
    const httpOptions = {
      params: new HttpParams().set("name", "Mohit").set("limit", "25")
    };
    this.http.get(url, httpOptions).subscribe(res =>console.log("this is res==>",res));
  }

  dopost()
  {
    console.log("Post")
    let url=`${this.apiRoot}/post`;
    console.log(url);
    const httpOptions={
      params:new HttpParams().set("name","mohit").set("limit","25")

    };
    this.http.post(url,{cname:"Ashish",cid:"101"},httpOptions).subscribe(res=>console.log("Output is=",res));

  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().set("name", "Mohit").set("limit", "20")
    };
    this.http
      .put(url, { cname: "Wishtree", location: "Wakad" }, httpOptions)
      .subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set("name", "mohit").set("limit", "25")
    };
    this.http.delete(url, httpOptions).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http
      .get(url)
      .toPromise()
      .then(res => console.log(res));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: btoa("username:password")
      })
    };

    let url = `${this.apiRoot}/get`;

    this.http
      .get(url, httpOptions)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

 

}
