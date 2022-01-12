import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class ToDoComponent implements OnInit {
  @Input() toDo!: ToDo;
  constructor() {}

  ngOnInit(): void {}
}
