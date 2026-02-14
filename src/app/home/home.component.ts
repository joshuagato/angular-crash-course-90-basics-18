import { Component, signal } from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello World');

  keyUpHandler() {
    console.log('user typed something in the input')
  }

  keyUpHandlerWithEvent(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
