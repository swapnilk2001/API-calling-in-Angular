import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getmethod();
    // this.postMethod();
  }

  getUrl = 'https://jsonplaceholder.typicode.com/posts';

  public getmethod(): Observable<any> {
    return this.http.get<any>(this.getUrl);
  }

  // postUrl = 'https://jsonplaceholder.typicode.com/posts';

  // public postMethod(): Observable<any> {
  //   let body = [
  //     {
  //       userId: 10001,
  //       id: 10001,
  //       title:
  //         'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //       body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecton',
  //     },
  //     {
  //       userId: 20002,
  //       id: 20002,
  //       title:
  //         'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //       body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  //     },
  //   ];

  //   return this.http.post<any>(this.getUrl, {});
  // }
}
