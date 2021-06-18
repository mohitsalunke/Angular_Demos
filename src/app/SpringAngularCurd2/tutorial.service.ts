import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorial } from './Tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  
  baseUrl:string;
  
  constructor(private http:HttpClient) { 
    this.baseUrl= 'http://localhost:8080/api/tutorials';
  }

  getAll()
  {
    console.log("im in getinfo service");
    return this.http.get<Tutorial[]>(this.baseUrl)
  }

  create(data:any) {
    return this.http.post<Tutorial>(this.baseUrl, data);
  }

  getById(id:number)
  {
    return this.http.get<Tutorial>(`${this.baseUrl}/${id}`);
  }

  delete(id:any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
