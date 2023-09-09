import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  name: string;
  password: string;
  loading: boolean;

  constructor(public authService: AuthService, public router: Router) {

  }

  ngOnInit() {
    this.clearForm();
  }

  userSignin(): void {
    const loginRequest: LoginRequest = new LoginRequest();

    loginRequest.password = this.password;
    loginRequest.username = this.name;
    this.loading = true;

    this.authService.userSignin(loginRequest).subscribe((resp) => {
      alert('User Signin successfully!');
      this.loading = false;
      this.clearForm();
      let obj :any;
      obj = resp;
      localStorage.setItem('currentUser', JSON.stringify({ token: obj.accessToken, name: obj.username }));
      this.router.navigate(['/']); 
    })

  }
  
  clearForm(): void {
    this.name = '';
    this.password = '';
    
  }
  goToRegister(): void{
    this.router.navigate(['/auth/register'])
  }

}
