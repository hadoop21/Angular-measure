import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  users: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.users;
  }

  showDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    this.userService.ShowUserDetails(user);
  }
}
