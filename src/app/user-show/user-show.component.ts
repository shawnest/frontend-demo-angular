import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {

  users : User[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() : void{
    this.userService.getUsers().subscribe((data) => this.users = data);
  }






}
