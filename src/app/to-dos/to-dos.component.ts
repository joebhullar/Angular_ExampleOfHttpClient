import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
  providers:[ToDosService]
})
export class ToDosComponent  {
  todos:any;
  constructor(private objToDosService:ToDosService) {
    this.objToDosService.getAllToDos().subscribe((data=>{this.todos=data}))
   }


}
