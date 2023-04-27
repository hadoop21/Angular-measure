import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent {
  constructor(private userService: UserService) {}
  username: string = '';
  status: string = 'active';

  AddUser() {
    this.userService.AddNewUser(this.username, this.status);
  }
}
