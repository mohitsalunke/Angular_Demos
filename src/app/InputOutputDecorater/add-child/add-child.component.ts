import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
  num1:number;
  num2:number;

  @Output() Add: EventEmitter<number> =new EventEmitter<number>()
  constructor() {

    this.num1=0;
    this.num2=0;
   }

  ngOnInit(): void {
  }
  calculate():void
  {
    this.Add.emit(this.num1+this.num2);
  }

}
