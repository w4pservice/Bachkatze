import { Component } from '@angular/core';

@Component({
  selector: 'login-registration-component',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})

export class LoginRegistrationComponent {

  login: string = "active";
  registration: string ="";
  show: boolean = true;

  onClick() {
    if(this.login === "active") {
      this.login = "";
      this.registration = "active";
      this.show =!this.show;
    }
    else {
      this.login = "active";
      this.registration = "";
      this.show =!this.show;
    }
  }

  onRegistration() {
    
  }
}