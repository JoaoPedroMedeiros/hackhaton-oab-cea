import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-corpo-peticao',
  templateUrl: './corpo-peticao.component.html',
  styleUrls: ['./corpo-peticao.component.css']
})
export class CorpoPeticaoComponent extends PerguntaComponent {

  respostas: Respostas;

  aceito: boolean = false;

  public data = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

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
