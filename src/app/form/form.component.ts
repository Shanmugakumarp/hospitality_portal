import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()
  addPatient: EventEmitter<object> = new EventEmitter<object>();

  public model: object = {
    firstname: '',
    lastname: '',
    gender: '',
    age: 0,
    city: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(`${this.model['firstname']} ${this.model['lastname']} added successfully`);
    this.addPatient.emit(this.model);
    console.log(this.model);
  }

  validate() {
    return (this.model['firstname'] && this.model['lastname'] && this.model['gender'] && this.model['age'] > 0 && this.model['city']);
  }
}
