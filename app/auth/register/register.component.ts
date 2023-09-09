import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/model/signup-request';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string;
  password: string;
  email: string;
  constructor(public authService: AuthService, public router: Router) {

  }

  ngOnInit() {

  }

  userRegister(): void {
    const signupRequest: SignupRequest = new SignupRequest();

    signupRequest.email = this.email;
    signupRequest.password = this.password;
    signupRequest.username = this.name;
    signupRequest.role = ['user'];

    this.authService.userRegisteration(signupRequest).subscribe((resp) => {
      alert('User registered successfully!');
      this.clearForm();
      this.router.navigate(['/auth/login']);

    });

  }

  clearForm(): void {
    this.name = '';
    this.password = '';
    this.email = '';
  }

}
