import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:string="Welcome to photos "
  constructor() { }

  ngOnInit(): void {
  }

}
