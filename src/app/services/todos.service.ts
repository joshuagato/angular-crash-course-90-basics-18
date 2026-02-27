import {inject, Injectable} from '@angular/core';
import {Todo} from '../model/todo.type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http: HttpClient = inject(HttpClient);

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

  getTodosFromApi(): Observable<Todo[]> {
    const url: string = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }

  constructor() {

  }
}
