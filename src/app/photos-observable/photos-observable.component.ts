import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos-observable',
  templateUrl: './photos-observable.component.html',
  styleUrls: ['./photos-observable.component.css']
})
export class PhotosObservableComponent {
  photos:any;

  constructor(private objPhotoService:PhotosService) { 
    this.objPhotoService.getAllPhotosObservable().subscribe((data=>{this.photos=data}));
  }

}
