import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { APIServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css'],
})
export class ApiComponentComponent {
  constructor(private getapi: APIServiceService) {}
  getArtilce: any;

  postAticle: any;

  ngOnInit() {
    this.getapi.getmethod().subscribe((data) => {
      this.getArtilce = data;
      console.log(this.getArtilce);
    });

    // this.getapi.postMethod().subscribe((data) => {
    //   console.log(data);
    //   this.postAticle = data;
    // });
  }
}
