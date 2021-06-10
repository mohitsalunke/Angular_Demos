import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  value:any;
  constructor() { }

  ngOnInit(): void {
  }

  log(contactForm:any) {
    this.value = contactForm;
    console.log(contactForm);
}

}
