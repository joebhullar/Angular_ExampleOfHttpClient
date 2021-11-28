import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers:[PhotosService]
})
export class PhotosComponent  {
  photos:any;

  constructor(private objPhotoService:PhotosService) { 
    this.objPhotoService.getAllPhotos().subscribe((data=>{this.photos=data}));
  }


}
