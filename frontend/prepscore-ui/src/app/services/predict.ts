import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  private apiUrl = 'http://127.0.0.1:8000/predict';

  constructor(private http: HttpClient) {}

  predictScore(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}