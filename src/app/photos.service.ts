import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from './Models/Photos';

@Injectable(
  // {providedIn: 'root'}
  )
export class PhotosService {

  constructor(private http:HttpClient){} 
  
  getAllPhotos(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
   }
   getAllPhotosObservable(){
    return this.http.get<Photos[]>("https://jsonplaceholder.typicode.com/photos");
   }
}
