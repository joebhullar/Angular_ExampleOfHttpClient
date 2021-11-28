import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import {FormsModule} from '@angular/forms';
import { UserObservableComponent } from './user-observable/user-observable.component'
import { UserService } from './user.service';
import { CommentsObservableComponent } from './comments-observable/comments-observable.component';
import {CommentsService} from './comments.service';
import { AlbumsObservableComponent } from './albums-observable/albums-observable.component'
import { AlbumsService } from './albums.service';
import { PhotosService } from './photos.service';
import { PhotosObservableComponent } from './photos-observable/photos-observable.component';
import { ToDosObservableComponent } from './to-dos-observable/to-dos-observable.component';
import { ToDosService } from './to-dos.service';

const routes:Routes=[
  {path:'Users', component:UsersComponent},
  {path:'Comments', component:CommentsComponent},
  {path:'Albums', component:AlbumsComponent},
  {path:'Photos', component:PhotosComponent},
  {path:'ToDos', component:ToDosComponent},
  {path:'UserByObservable', component:UserObservableComponent},
  {path:'ObserverableComments', component:CommentsObservableComponent},
  {path:'AlbumsByObservable', component:AlbumsObservableComponent},
  {path:'PhotosByObservable', component:PhotosObservableComponent},
  {path:'ToDosByObservable',component:ToDosObservableComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    ToDosComponent,
    UserObservableComponent,
    CommentsObservableComponent,
    AlbumsObservableComponent,
    PhotosObservableComponent,
    ToDosObservableComponent   
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
  ],
  exports:[RouterModule],
  providers: [UserService, CommentsService, AlbumsService, PhotosService, ToDosService], //We have to list ALL Services that have Observable 
  bootstrap: [AppComponent]
})
export class AppModule { }
