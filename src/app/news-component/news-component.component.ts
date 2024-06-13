import { Component } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css'],
})
export class NewsComponentComponent {
  constructor(private service: NewsServiceService) {}

  Article: any;

  ngOnInit() {
    this.service.getNews().subscribe((data) => {
      console.log(data);
      this.Article = data.articles;
    });
  }
}
