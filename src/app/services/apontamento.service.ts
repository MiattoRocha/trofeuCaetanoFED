import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apontamento } from '../models/apontamento';
import { JogadorService } from './jogador.service';
import { JogoService } from './jogo.service';

@Injectable({
  providedIn: 'root'
})
export class ApontamentoService {

  private readonly baseUrl: string = 'http://localhost:8080/jogos'

  constructor(
    private http: HttpClient,
    private jogoService: JogoService,
    private jogadorService: JogadorService
  ) { }

  getApontamento(): Observable<Apontamento[]> {

    return this.http.get<Apontamento[]>(this.baseUrl)
  }

  postApontamento(apontamento:Apontamento ){

    this.http.post<Apontamento>(this.baseUrl,apontamento)
  }

  putApontamento(apontamento:Apontamento ) {

    this.http.put<Apontamento>(`${this.baseUrl}/${apontamento.idApontamento}`,apontamento)
  }

  deleteApontamento(apontamento: Apontamento) {

    this.http.delete(`${this.baseUrl}/${apontamento.idApontamento}`)
  }
}
