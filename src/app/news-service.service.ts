import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}

  NewsUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2024-05-07&sortBy=publishedAt&apiKey=907434974dcd40e0803e92e08c17f899';
  getNews(): Observable<any> {
    return this.http.get(this.NewsUrl);
  }
}
