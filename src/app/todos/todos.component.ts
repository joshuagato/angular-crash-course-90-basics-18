import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {TodosService} from '../services/todos.service';
import {Todo} from '../model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService: TodosService = inject(TodosService);

  todoItems: WritableSignal<Todo[]> = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoItems.set(this.todoService.todoItems);
    console.log(this.todoItems());
  }
}
