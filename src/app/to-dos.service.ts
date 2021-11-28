import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDos } from './Models/ToDos';

@Injectable()
export class ToDosService {

  constructor(private http:HttpClient) 
  { }
  getAllToDos(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  getAllToDosObservable(){
    return this.http.get<ToDos[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
