import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login({ email: this.email, password: this.password }).subscribe(response => {
      this.authService.saveToken(response.token);
      this.router.navigate(['/']); // Перенаправление на защищенную страницу
    }, error => {
      console.error(error);
      // Обработка ошибок при входе
    });
  }
}

