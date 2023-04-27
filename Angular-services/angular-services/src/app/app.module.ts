import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './Services/enroll.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    AngularComponent,
    AdduserComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EnrollService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
