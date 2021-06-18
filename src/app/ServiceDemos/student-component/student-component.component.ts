import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/FormsDemos/contact/Contact';
import { StudentServiceService } from '../student-service.service';
import { Student } from './studentDetails';


@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css'],
  providers:[StudentServiceService]
})
export class StudentComponentComponent implements OnInit {
  flag:boolean=false;
  value:any;
  StudentForm:Student[]=[];
  Student={
    studid:0,
    studname:"",
    clgname:"",
    city:"",
    mobile:0
  }
  constructor(private serObj:StudentServiceService) { 

    this.StudentForm=this.serObj.studentArr;
  }

  Add(StudentData:Contact)
  {
      if(!this.flag)
      {
        this.value=StudentData;
        this.serObj.addData(StudentData);
        this.StudentForm=this.serObj.studentArr;
      }
      else{
        this.flag=false;
        console.log('i am in update');
      console.log(StudentData);

      }
  }

  remove(studData:any){
    this.serObj.removedata(studData);
  }

  edit(studData:any)
  {
    this.flag=true;
    console.log('In  component edit method' + studData);
    this.Student=studData;
       
      // this.serObj.editData(studData);
  }

  update(){
    this.flag=true;
    this.serObj.updateData(this.StudentForm);
    // this.StudentForm=this.serObj.studentArr;
    console.log('In component update method');
    
    this.Student.studid=0;
    this.Student.studname="";
    this.Student.clgname="";
    this.Student.city="";
    this.Student.mobile=0;
    
    

  }

  
  ngOnInit(): void {
  }

}
