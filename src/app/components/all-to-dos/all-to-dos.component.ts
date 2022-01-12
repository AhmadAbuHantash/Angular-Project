import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { toDos } from 'src/toDos';

@Component({
  selector: 'app-all-to-dos',
  templateUrl: './all-to-dos.component.html',
  styleUrls: ['./all-to-dos.component.css'],
})
export class AllToDosComponent implements OnInit {
  toDos: ToDo[] = toDos;

  constructor() {}

  ngOnInit(): void {}
}
