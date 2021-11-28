import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-dos-observable',
  templateUrl: './to-dos-observable.component.html',
  styleUrls: ['./to-dos-observable.component.css']
})
export class ToDosObservableComponent {

  todosObservable:any;
  constructor(private objToDosService:ToDosService) {
    this.objToDosService.getAllToDosObservable().subscribe((data=>{this.todosObservable=data}))
   }

}
