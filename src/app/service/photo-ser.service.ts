import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoSerService {
  constructor(private http: HttpClient) {}

  photourl = 'https://jsonplaceholder.typicode.com/photos';

  public getPhoto(): Observable<any> {
    return this.http.get(this.photourl);
  }

  ngOnInit() {
    this.getPhoto();
  }
}
