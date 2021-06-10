import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class HelloService {

  constructor() { }

  heyHello():string{
    return "hello Goodmorning to all..";
  }
}
