import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-sozinho',
  templateUrl: './sozinho.component.html',
  styleUrls: ['./sozinho.component.css']
})
export class SozinhoComponent extends PerguntaComponent {

  respostas: Respostas;

  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
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
