import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, of, Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  template:`<h1>Check Output on Console<h1>`,
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
   
  observable:Observable<string>;
  observer?:Observer<string>;
  
  

  subscription: Subscription;

  constructor()
  {
    this.observable = new Observable((observer: Observer<string>) => {
      this.observer = observer;
    });
    this.subscription=this.observable
    .subscribe(this.handleData, this.handleError , this.handleComplete);

    this.observer?.next('12');
    this.observer?.next('15');
    this.observer?.next('16');
    this.observer?.error("An Error Occured!");
    this.observer?.complete();

  }


    
    ngOnInit() {
    
    // this.subscription=this.observable
    //   .subscribe(this.handleData, this.handleError , this.handleComplete);


    

     

    const squareOf2 = of(1, 2, 3, 4, 5,6)
    .pipe(
       filter((num: number) => num % 2 === 0),
      map((num: number) => num * num)
    );
   squareOf2.subscribe( (num: any) => console.log(num));
  }

    handleData(data: any) {
        console.log('Here are the usable data', data);
        
      }

      handleComplete() {
        console.log('Complete');
      }

      handleError(error: any) {
        console.log('error:', error)
        return Observable.throw(error);
      }

  ngOnDestroy(): void {
    this.subscription
  }

}
