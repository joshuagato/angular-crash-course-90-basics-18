import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from "@angular/core";
import { TodosService } from "../services/todos.service";
import { Todo } from "../model/todo.type";
import { catchError } from "rxjs";
import { NgIf } from "@angular/common";
import { TodoItemComponent } from "../components/todo-item/todo-item.component";

@Component({
  selector: "app-todos",
  standalone: true,
  imports: [NgIf, TodoItemComponent],
  templateUrl: "./todos.component.html",
  styleUrl: "./todos.component.scss",
})
export class TodosComponent implements OnInit {
  todoService: TodosService = inject(TodosService);

  todoItems: WritableSignal<Todo[]> = signal<Array<Todo>>([]);

  ngOnInit(): void {
    // this.todoItems.set(this.todoService.todoItems);
    // console.log(this.todoItems());
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
