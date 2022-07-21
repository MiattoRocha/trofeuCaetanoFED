import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apontamento } from '../models/apontamento';
import { Jogador } from '../models/jogador';
import { Jogo } from '../models/jogo';
import { JogadorService } from './jogador.service';
import { JogoService } from './jogo.service';

@Injectable({
  providedIn: 'root'
})
export class ApontamentoService {

  private readonly baseUrl: string = 'http://localhost:8080/apontamentos'

  constructor(
    private http: HttpClient,
    private jogoService: JogoService,
    private jogadorService: JogadorService
  ) { }

  getApontamento(): Observable<Apontamento[]> {

    return this.http.get<Apontamento[]>(this.baseUrl)
  }

  postApontamento(idjogo: Jogo, idJogador: Jogador, apontamento: Apontamento){
    const apontamentoRequest = {
      tentativa: apontamento.tentativas,
      data: apontamento.data
    }
    this.http.post(`${this.baseUrl}/jogador/${idJogador.idJogador}/jogo/${idjogo.idJogo}`,apontamentoRequest)
  }

  putApontamento(apontamento:Apontamento ) {

    this.http.put(`${this.baseUrl}/${apontamento.idApontamento}`,apontamento)
  }

  deleteApontamento(apontamento: Apontamento) {

    this.http.delete(`${this.baseUrl}/${apontamento.idApontamento}`)
  }
}
