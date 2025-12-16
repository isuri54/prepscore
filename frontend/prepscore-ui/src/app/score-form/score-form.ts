import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-score-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './score-form.html',
  styleUrls: ['./score-form.css']
})
export class ScoreFormComponent {

  predictedScore: number | null = null;

  formData = {
    Skills: [],
    GPA: null,
    Experience: null,
    Certifications: null,
    Age: null,
    Industry: ''
  };

  constructor(private http: HttpClient) {}

  onPredict() {
    this.http.post<any>('http://127.0.0.1:8000/predict', this.formData)
      .subscribe({
        next: (res) => this.predictedScore = res.Predicted_Score,
        error: (err) => alert('API error. Is FastAPI running?')
      });
  }
}
