import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.css']
})
export class TicketsFormComponent implements OnInit {

  dynamicForm:FormGroup | any;
  submitted = false;

  constructor(private fb:FormBuilder) { 
    // this.dynamicForm=this.fb.group({});
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }
  get ticketFormGroups(){
    return this.t.controls as FormGroup[];
  }

  ngOnInit(): void {

    this.dynamicForm=this.fb.group({
      numberOfTickets:['',Validators.required],
      tickets: new FormArray([])
    });
  }

  onChangeTickets(e:any)
  {
    console.log("I m in changr ")
    const numberOfTickets=e.target.value || 0;
    if(this.t.length>numberOfTickets)
    {
      for(let i=this.t.length; i<numberOfTickets;i++)
      {
        this.t.push(this.fb.group({
          name:['',Validators.required],
          email:['',Validators.required,Validators.email]
        }));
      }
    }
    else{
      for(let i=this.t.length;i>=numberOfTickets;i--)
      {
         this.t.removeAt(i);
      }
    }
  }

  

  onSubmit()
  {
    this.submitted = true;
    if(this.dynamicForm.invalid)
    {
      return;
    }

    alert('Success!! :-)\n\n' +JSON.stringify(this.dynamicForm.value,null,4))
  }

  onReset()
  {
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
  }

  onClear()
  {
    this.submitted=false;
    this.t.reset();
  }

 

}
