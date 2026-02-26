import {Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // component: HeaderComponent,
    loadComponent: async () => {
      const m = await import('./home/home.component');
      return m.HomeComponent;
    }
  },
  {
    path: 'todos',
    component: TodosComponent,
    // loadComponent: async () => {
    //   const m = await import('./todos/todos.component');
    //   return m.TodosComponent;
    // }
  }
];
