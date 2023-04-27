import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent {
  title = 'JavaScript';

  constructor(private enrollService: EnrollService) {}

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
