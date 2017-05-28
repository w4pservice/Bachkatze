import { Component } from '@angular/core';

@Component({
  selector: 'login-registration-component',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})

export class LoginRegistrationComponent {

  login: string = "active";
  registration: string ="";
  lastClick: string = "login";
  show: boolean = true;
  logo: string = "./assets/logo.png";
  onClick(name: string): void {
    if(this.lastClick != name) {
      this.lastClick = name;
      this.show = !this.show;
      if(this.login.length >0) {
        this.login = "";
        this.registration = "active";
      }else {
        this.login = "active";
        this.registration = "";
      }
    }
  }

  onRegistration() {
    
  }
}