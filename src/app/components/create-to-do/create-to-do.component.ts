import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { getNextId, toDos } from 'src/toDos';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css'],
})
export class CreateToDoComponent implements OnInit {
  constructor() {}
  newToDo = new ToDo(getNextId(), false, '', new Date());

  submitted = false;
  createNewToDo() {
    this.newToDo = new ToDo(getNextId(), false, '', new Date());
  }
  onSubmit() {
    this.submitted = true;
    toDos.push( this.newToDo);
    this.createNewToDo();
  }
  getDateToday() {
    return  new Date();
  }
  ngOnInit(): void {}
}
