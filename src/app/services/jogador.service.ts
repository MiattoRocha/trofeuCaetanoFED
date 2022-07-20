import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../models/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

    private readonly baseUrl: string = 'http://localhost:8080/jogadores'

  constructor(
    private http: HttpClient
  ) { }

  getJogador(): Observable<Jogador[]> {

    return this.http.get<Jogador[]>(this.baseUrl)
  }

  getJogadorById(id: number): Observable<Jogador> {

    return this.http.get<Jogador>(`${this.baseUrl}/${id}`)
  }

  postJogador(jogador: Jogador) {

    this.http.post<Jogador>(this.baseUrl, jogador)
  }

  putJogador(jogador: Jogador) {

    this.http.put<Jogador>(`${this.baseUrl}/${jogador.idJogador}`, jogador)
  }

  deleteJogador(jogador: Jogador) {

    this.http.delete(`${this.baseUrl}/${jogador.idJogador}`)
  }
}
