import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { recurso } from './recurso';


@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRecursos(): Observable<recurso[]> {
    return this.http.get<recurso[]>(this.apiUrl);
  }

}
