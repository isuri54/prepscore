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
  skillsList: string[] = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'SQL',
  '.net',
  'Flutter',
  'Data Analysis',
  'Data Structures',
  'Algorithms',
  'Object Oriented Programming',
  'Problem Solving',
  'Teamwork',
  'HTML',
  'CSS',
  'React',
  'Angular',
  'Node.js',
  'Git',
  'REST APIs',
  'Database Management',
  'Machine Learning',
  'Cloud Basics'
  ];

  formData = {
    Skills: [] as String[],
    GPA: null,
    Experience: null,
    Certifications: null,
    Age: null,
  };

  onSkillChange(skill: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.formData.Skills.push(skill);
    } else {
      this.formData.Skills = this.formData.Skills.filter(s => s !== skill);
    }
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
