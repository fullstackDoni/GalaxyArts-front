import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register({ name:this.name,email: this.email, password: this.password }).subscribe(response => {
      this.authService.saveToken(response.token);
      this.router.navigate(['/login']);
    }, error => {
      console.error(error);
      if (error.status === 500) {
        // Сообщение об ошибке для пользователя
      } else {
        // Обработка других ошибок
        // ...
      }
    });
  }

}

