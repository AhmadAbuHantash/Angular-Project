import { ToDo } from './app/models/ToDo';

export const toDo1 = new ToDo(1, true, 'aufstehen', new Date());
export const toDo2 = new ToDo(1, true, 'Kafee kochen', new Date());
export const toDo3 = new ToDo(1, false, 'arbeiten', new Date());
export const toDo4 = new ToDo(1, false, 'mittagessen', new Date());

export const toDos = [toDo1, toDo2, toDo3, toDo4];
