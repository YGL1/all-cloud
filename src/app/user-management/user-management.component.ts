import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: any[];
  userForEdit: any;
  userForAdd:any;
  constructor(public userData: UserDataService, public router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userData.getUser().subscribe((result: any) => {
      this.users = result.results,
        console.log(result)
    });
  }

  addUser(firstName:string,lastName:string,idValue:string,gender:string,phone:string,email:string) {
    this.userForAdd=JSON.parse(JSON.stringify(this.users[0]));
    this.userForAdd.id.value=idValue;
    this.userForAdd.gender=gender;
    this.userForAdd.name.first=firstName;
    this.userForAdd.name.last=lastName;
    this.userForAdd.phone=phone;
    this.userForAdd.email=email;
    this.users.push(this.userForAdd);
    this.userForAdd=null;
  }
  deleteUser(num: number) {
    const index = this.users.indexOf(this.users[num], 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  editUser(num: number) {
    const index = this.users.indexOf(this.users[num], 0);
    console.log(" id "+ index);
    if (index > -1) {
    this.userForEdit = this.users[index];
    }
  }
  OKEdit(){
    this.userForEdit=null;
  }
}
