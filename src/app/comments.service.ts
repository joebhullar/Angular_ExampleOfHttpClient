import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './Models/Comments';

@Injectable(
  // {providedIn: 'root' }
)
export class CommentsService {

  constructor(private http:HttpClient) { }
  getAllComments(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }

  getAllCommentsObservable():Observable<Comments[]>  
  {
    return this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/comments")
  }

}
