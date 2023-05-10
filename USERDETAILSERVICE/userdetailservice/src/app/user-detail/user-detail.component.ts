import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) {}

  user:
    | {
        name: string;
        job: string;
        gender: string;
        country: string;
        age: number;
        avatar: string;
      }
    | undefined;

  ngOnInit(): void {
    this.userService.OnshowDetailsClicked.subscribe(
      (data: {
        name: string;
        job: string;
        gender: string;
        country: string;
        age: number;
        avatar: string;
      }) => {
        this.user = data;
      }
    );
  }
}
