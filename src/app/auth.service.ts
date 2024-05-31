import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users'; // Замените на ваш URL API

  constructor(private http: HttpClient) {
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(tap(response => {
        const token = response.token; // Предположим, что сервер возвращает токен в поле 'token'
        this.saveToken(token); // Сохраняем полученный токен
      }));
  }

  register(userInfo: { email: string, password: string, name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userInfo);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token'); // Удаляем сохраненный токен при выходе
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

