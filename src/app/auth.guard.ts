import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Предполагается, что у вас есть сервис AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Разрешаем доступ, если пользователь авторизован
    } else {
      this.router.navigate(['/login']); // Редирект на страницу логина, если пользователь не авторизован
      return false;
    }
  }
}

