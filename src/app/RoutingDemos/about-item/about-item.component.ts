import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css']
})
export class AboutItemComponent implements OnInit {

  id:any;
  paramsub:any;
  public selectedTr:string="";




  constructor(private activateRouts: ActivatedRoute) { }

  ngOnInit(): void {

    this.paramsub=this.activateRouts.params.subscribe(result => {
      this.selectedTr=result['id'];
    })
  }

}
