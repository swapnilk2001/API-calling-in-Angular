import { Component } from '@angular/core';
import { CommentSerService } from '../service/comment-ser.service';

@Component({
  selector: 'app-commemt-co',
  templateUrl: './commemt-co.component.html',
  styleUrls: ['./commemt-co.component.css'],
})
export class CommemtCoComponent {
  constructor(private com: CommentSerService) {}

  GetCom: any;

  ngOnInit() {
    this.com.getCommet().subscribe((data) => {
      this.GetCom = data;
      console.log(this.GetCom);
    });
  }
}
