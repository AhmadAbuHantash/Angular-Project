import { ToDo } from './app/models/ToDo';

export const toDos = [
  new ToDo(1, true, 'Aufstehen', new Date()),
  new ToDo(2, true, 'Kafee kochen', new Date()),
  new ToDo(3, false, 'Arbeiten', new Date()),
  new ToDo(4, false, 'Mittagessen', new Date()),
  new ToDo(5, false, 'Pause', new Date()),
  new ToDo(6, false, 'Abendessem', new Date()),
  new ToDo(7, false, 'Zähneputzen', new Date()),
  new ToDo(8, false, 'Schlafen', new Date()),
];
