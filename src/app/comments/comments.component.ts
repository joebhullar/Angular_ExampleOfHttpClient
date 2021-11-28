import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[CommentsService]
})
export class CommentsComponent {

  comments:any;
  constructor(private objCommentService:CommentsService) { 
    this.objCommentService.getAllComments().subscribe((data=>{this.comments=data}));
  }


}
