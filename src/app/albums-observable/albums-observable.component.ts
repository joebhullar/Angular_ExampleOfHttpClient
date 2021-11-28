import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums-observable',
  templateUrl: './albums-observable.component.html',
  styleUrls: ['./albums-observable.component.css']
})
export class AlbumsObservableComponent  {

  albumsObservable:any;
  constructor(private objAlbumsService:AlbumsService) { 
    this.objAlbumsService.getAllAlbumsObservable().subscribe((data=>{this.albumsObservable=data}))
  }

}
