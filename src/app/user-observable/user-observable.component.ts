import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-observable',
  templateUrl: './user-observable.component.html',
  styleUrls: ['./user-observable.component.css']
})
export class UserObservableComponent{


  users:any;
  userFetch:any;
  showHeader:boolean=false;
  id:number;

  userFetchById:any;
  showHeaderById:boolean=false;

  constructor(private objUserService: UserService) { 
    this.objUserService.getUserByObservable().subscribe((data=>{this.users=data})) //does subscribe mean it reads it indefinatley or only one time at construcotr invocation
  }

  FetchUserDetailsByObservable(){
    this.objUserService.getUserByObservable().subscribe((data=> 
    {
      this.showHeader=true;
      this.userFetch=data;
    }))
  }


  getUserByObservableById(id){
    this.objUserService.getUserByObservableById(id).subscribe((data=>
      {
        this.showHeaderById=true;
        this.userFetchById=data;
      }))
  }

}
