import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../Tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial:Tutorial[]=[];
  Tutorial={
    title:"",
    description:"",
    published:false
  }

  constructor(private serObj:TutorialService) { }
  
  addInfo(tutorial:any)
  {
    console.log(tutorial);
    this.serObj.create(tutorial);
  }


  ngOnInit(): void {
   
    
  }

}
