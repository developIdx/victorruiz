import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  host:{
    class: ' flex h-dvh w-full justify-center items-center text-white'
  },
})
export class AppComponent {
  title = signal<string>( 'Victor Ruiz');

  clickAlert(){

  }
}
