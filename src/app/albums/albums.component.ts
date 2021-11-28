import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[AlbumsService] //This is Allocating memory for us to Instantiate the DI Instance of our Service in this component.
})
export class AlbumsComponent {

  albums:any;
  constructor(private objAlbumsService:AlbumsService) { 
    this.objAlbumsService.getAllAlbums().subscribe((data=>{this.albums=data}))
  }



}
