import { Component } from '@angular/core';
import { PhotoSerService } from 'src/app/service/photo-ser.service';

@Component({
  selector: 'app-photo-com',
  templateUrl: './photo-com.component.html',
  styleUrls: ['./photo-com.component.css'],
})
export class PhotoComComponent {
  constructor(private pp: PhotoSerService) {}

  Photo: any;

  ngOnInit() {
    this.pp.getPhoto().subscribe((data) => {
      console.log(data);
      this.Photo = data;
    });
  }
}
