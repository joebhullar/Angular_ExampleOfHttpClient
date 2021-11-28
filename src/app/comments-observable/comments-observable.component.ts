import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments-observable',
  templateUrl: './comments-observable.component.html',
  styleUrls: ['./comments-observable.component.css']
})
export class CommentsObservableComponent {

  comments:any;
  constructor(private objCommentService:CommentsService) { 
    this.objCommentService.getAllCommentsObservable().subscribe((data=>{this.comments=data}));
  }


}
