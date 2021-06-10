import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {

  output:number;
  constructor() { 
    this.output=0;
  }

  getOutput(res:number)
  {
    this.output=res;
  }

  ngOnInit(): void {
  }

}
