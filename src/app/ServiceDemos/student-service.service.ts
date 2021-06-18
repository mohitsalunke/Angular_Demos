import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  index:number;
  studentArr:any=[];
  studid:number;
  studname:string;
  clgname:string;
  city:string;
  mobile:number;


  constructor() {
    this.studid=0;
    this.studname="";
    this.clgname="";
    this.city="";
    this.mobile=0;

    this.index=0;
    
   }

  addData(stud:any)
  {
    console.log("im in service add");
    this.studentArr.push(stud);

    this.studid=0;
    this.studname="";
    this.clgname="";
    this.city="";
    this.mobile=0;

    
  }

  removedata(studdata:any)
  {
    console.log("im in service add");
    let index1=this.studentArr.indexOf(studdata);
    this.studentArr.splice(index1,1);
  }

  // editData(i:number)
  // {
  //   console.log("In Service edit");
  //   this.index=i;
  //   //let index=this.studentArr.indexOf(studdata);
  //   this.studid=this.studentArr[i].studid;
  //   this.studname=this.studentArr[i].studname;
  //   this.clgname=this.studentArr[i].clgname;
  //   this.city=this.studentArr[i].city;
  //   this.mobile=this.studentArr[i].mobile;
     
  // }

  updateData(studdata:any)
  {
    console.log("In Service Update");
    this.index=this.studentArr.indexOf(studdata);
    this.studentArr[this.index].studid=this.studid;
    this.studentArr[this.index].studname=this.studname;
    this.studentArr[this.index].clgname=this.clgname;
    this.studentArr[this.index].city=this.city;
    this.studentArr[this.index].mobile=this.mobile;

    this.studid=0;
    this.studname="";
    this.clgname="";
    this.city="";
    this.mobile=0;
  }
}
