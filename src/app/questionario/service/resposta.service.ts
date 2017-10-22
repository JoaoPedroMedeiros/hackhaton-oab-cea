import { Injectable } from '@angular/core';
import { Respostas } from '../model/Respostas';

@Injectable()
export class RespostaService {

  respostas: Respostas;

  constructor() { 
    this.respostas = new Respostas();
  }

  getRespostas() : Respostas {
    return this.respostas;
  }
}
