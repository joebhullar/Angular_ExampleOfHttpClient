import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; //Promise is alternative & Promise is part of JS. Observable is part of Rxjs
import {User} from './Models/User'

@Injectable(
  // {providedIn: 'root'}
  )
export class UserService {


  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }

  getUserById(id:number){
    return this.http.get("http://jsonplaceholder.typicode.com/users?id="+id)
  }

  getUserByObservable(): Observable<User[]>
  {
    return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users")
  }

  getUserByObservableById(id:number): Observable<User[]>{
    return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users?id="+id)
  }

  

}
