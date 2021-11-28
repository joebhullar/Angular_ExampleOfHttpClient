import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from './Models/Albums';

@Injectable(
  //We Do NOT need providedIn here because we are allocating memeory to instantiate DI in component.ts via 'Providers'
  //{  providedIn: 'root'}
  //QUESTION: Isn't this a better approach to have ProvidedIn:'root' instead of component.ts Provider Instantiation? IF We are going to re-use the service in several components?
)
export class AlbumsService {

  constructor(private http:HttpClient) { }
  getAllAlbums(){
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }

  getAllAlbumsObservable(){
    return this.http.get<Albums[]>("https://jsonplaceholder.typicode.com/albums")
  }
}
