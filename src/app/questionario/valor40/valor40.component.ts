import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-valor40',
  templateUrl: './valor40.component.html',
  styleUrls: ['./valor40.component.css']
})
export class Valor40Component extends PerguntaComponent {

  respostas: Respostas;
  
  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
  }

  atualizarValor(menor40: boolean) {
    this.respostas.valorParcial.maior20 = true;
    this.respostas.valorParcial.maior40 = !menor40;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
  titulo(): string {
    return '';
  }
  descricao(): string {
    return '';
  }
}
