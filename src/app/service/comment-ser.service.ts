import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentSerService {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCommet();
  }

  getCom = 'https://jsonplaceholder.typicode.com/comments';

  public getCommet(): Observable<any> {
    return this.http.get<any>(this.getCom);
  }
}
