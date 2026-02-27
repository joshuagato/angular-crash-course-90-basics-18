import {Injectable} from '@angular/core';
import {Todo} from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      id: 0,
      userId: 1,
      title: 'groceries',
      completed: false
    },
    {
      id: 2,
      userId: 1,
      title: 'car wash',
      completed: false
    },
  ];

  constructor() {
  }
}
