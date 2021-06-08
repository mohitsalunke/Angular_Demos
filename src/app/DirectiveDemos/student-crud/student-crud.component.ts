import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})
export class StudentCRUDComponent implements OnInit {

  studid:number;
  studname:string;
  studclass:number;
  engmarks:number;
  mathmarks:number;
  marathimarks:number;
  total:number;
  students:any[];
  selectedindex:number;
  ismarksadded:boolean=true;
  ismarksedited:boolean=true;

  constructor() { 
    this.studid=0;
    this.studname="";
    this.studclass=0;
    this.engmarks=0;
    this.mathmarks=0;
    this.marathimarks=0;
    this.total=0;
    this.students=[];
    this.selectedindex=0;
  }

  AddMarks():void{

    this.ismarksadded=true;
    this.students.push({

      studid:this.studid,
      studname:this.studname,
      studclass:this.studclass,
      engmarks:this.engmarks,
      mathmarks:this.mathmarks,
      marathimarks:this.marathimarks,
      total:this.total

      




    })

    this.studid=0;
    this.studname="";
    this.studclass=0;
    this.engmarks=0;
    this.mathmarks=0;
    this.marathimarks=0;
    this.total=0;

    console.log(this.students);

    
  }

  remove(i:number){
    this.students.splice(i,1);
  }

  edit(i:number){
    this.ismarksedited=true;
    this.ismarksadded=false;
    this.selectedindex=i;
    this.engmarks=this.students[i].engmarks;
    this.mathmarks=this.students[i].mathmarks;
    this.marathimarks=this.students[i].marathimarks;
    this.total=this.students[i].total;


  }

  UpdateMarks():void{
    this.ismarksedited=false;
    this.ismarksadded=true;
    this.students[this.selectedindex].engmarks=this.engmarks;
    this.students[this.selectedindex].mathmarks=this.mathmarks;
    this.students[this.selectedindex].marathimarks=this.marathimarks;
    this.students[this.selectedindex].total=this.total;

  }


  calculateMarks():void{
    this.total=this.engmarks+this.mathmarks+this.marathimarks;
  }

  ngOnInit(): void {
  }

}
