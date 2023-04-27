import { Component, OnInit } from '@angular/core';
import { EnrollService } from './Services/enroll.service';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'angular-services';

  constructor(
    private enrollService: EnrollService,
    private userServie: UserService,
    private loggerService: LoggerService
  ) {}

  users: { name: string; status: string }[] = [];

  ngOnInit() {
    this.users = this.userServie.users;
  }
}
