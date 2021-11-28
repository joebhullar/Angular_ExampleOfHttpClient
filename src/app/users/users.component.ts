import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
 // providers: [UserService]
})
export class UsersComponent  {

  users:any;
  userFetch:any;
  showHeader:boolean=false;
  id:number;

  userFetchById:any;
  showHeaderById:boolean=false;

  constructor(private objUserService: UserService) { 
    this.objUserService.getAllUsers().subscribe((data=>{this.users=data})) //does subscribe mean it reads it indefinatley or only one time at construcotr invocation
  }

  FetchUserDetails(){
    this.objUserService.getAllUsers().subscribe((data=> 
    {
      this.showHeader=true;
      this.userFetch=data;
    }))
  }

  FetchUserById(id){
    this.objUserService.getUserById(id).subscribe((data=>
      {
        this.showHeaderById=true;
        this.userFetchById=data;
      }))

  }

}
