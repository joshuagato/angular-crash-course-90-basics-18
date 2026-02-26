import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  // templateUrl: './app.component.html',
  template: `
    <app-header />

    <main>
      <router-outlet />
    </main>
  `,
  // styleUrl: './app.component.scss'
  styles: `
    main {
      padding: 16px;
    }
  `
})
export class AppComponent {
  title: string = 'first-ng-app';
}
