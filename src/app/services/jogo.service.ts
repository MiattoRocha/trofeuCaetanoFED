import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private readonly baseUrl: string = 'http://localhost:8080/jogos'

  constructor(
    private http: HttpClient
  ) { }

  getJogo(): Observable<Jogo[]> {

    return this.http.get<Jogo[]>(this.baseUrl)
  }

  getJogoById(id:number): Observable<Jogo> {

    return this.http.get<Jogo>(`${this.baseUrl}/${id}`)
  }

  postJogo(jogo: Jogo){

    this.http.post<Jogo>(this.baseUrl,jogo)
  }

  putJogo(jogo: Jogo) {

    this.http.put<Jogo>(`${this.baseUrl}/${jogo.idJogo}`,jogo)
  }

  deleteJogo(jogo: Jogo) {

    this.http.delete(`${this.baseUrl}/${jogo.idJogo}`)
  }
}
