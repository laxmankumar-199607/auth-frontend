import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    public router: Router,
    public authService: AuthService

  ) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);

  }
}
