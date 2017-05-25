import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LoginRegistrationComponent } from './login-registration.component';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    LoginRegistrationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  providers: [],
  exports: [
   LoginRegistrationComponent,
   LoginComponent,
   RegistrationComponent
  ]
  
})

export class LoginRegistrationModule { }
