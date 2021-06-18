import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../Tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorails-list',
  templateUrl: './tutorails-list.component.html',
  styleUrls: ['./tutorails-list.component.css']
})
export class TutorailsListComponent implements OnInit {
   tutorial:Tutorial[]=[];
  constructor(private serObj:TutorialService) { }

  getInfo()
  {
    console.log("im in getinfo component");
    this.serObj.getAll().subscribe(result=>{this.tutorial=result});
  }

  ngOnInit(): void {
  }

}
