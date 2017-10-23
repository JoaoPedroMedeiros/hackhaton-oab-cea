import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-valor20',
  templateUrl: './valor20.component.html',
  styleUrls: ['./valor20.component.css']
})
export class Valor20Component extends PerguntaComponent {
  
  respostas: Respostas;

  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
  }

  atualizarValor(menor20: boolean) {
    this.respostas.valorParcial.maior20 = !menor20;
    
    if (menor20)
      this.respostas.valorParcial.maior40 = false;
    else
      this.respostas.valorParcial.maior40 = null;
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
