import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Galaxy {
  _id: string;
  name: string;
  description?: string;
  distance: number;
  photo?: string;
}


@Injectable({
  providedIn: 'root'
})
export class GalaxyService {
  private apiUrl = 'http://localhost:3000/api/galaxies'; // URL сервера для работы с галактиками

  constructor(private http: HttpClient) {
  }

  private getRequestHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Получаем токен из localStorage
    return new HttpHeaders().set('x-auth-token', token || ''); // Устанавливаем заголовок x-auth-token
  }

  getGalaxies(): Observable<Galaxy[]> {
    const headers = this.getRequestHeaders(); // Получаем заголовки для запроса
    return this.http.get<Galaxy[]>(`${this.apiUrl}/all`, {headers}); // Передаем заголовки в запрос
  }

  getGalaxyById(id: string): Observable<Galaxy> {
    const headers = this.getRequestHeaders();
    return this.http.get<Galaxy>(`${this.apiUrl}/view/${id}`, {headers});
  }

  addGalaxy(galaxyData: {
    distance: number;
    name: string;
    description: string | undefined;
    photo: string | undefined;
  }): Observable<Galaxy> {
    const headers = this.getRequestHeaders();
    return this.http.post<Galaxy>(`${this.apiUrl}/create`, galaxyData, {headers});
  }

  updateGalaxy(id: string, galaxy: Galaxy): Observable<Galaxy> {
    const headers = this.getRequestHeaders();
    return this.http.put<Galaxy>(`${this.apiUrl}/update/${id}`, galaxy, { headers });
  }

  deleteGalaxy(id: string): Observable<any> {
    const headers = this.getRequestHeaders();
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`, { headers });
  }
}
