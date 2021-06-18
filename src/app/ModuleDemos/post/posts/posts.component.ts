import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data:any=[];
  show:boolean=false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.show = true;
    this.http.get("https://api.github.com/users").subscribe(resonse=>{

        console.log(resonse);
        this.data=resonse;})

  }

}
