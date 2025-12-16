import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreFormComponent } from './score-form/score-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScoreFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prepscore-ui');
}
