import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-provas',
  templateUrl: './provas.component.html',
  styleUrls: ['./provas.component.css']
})
export class ProvasComponent extends PerguntaComponent {

  constructor(protected respostaService: RespostaService) {
    super(respostaService);
  }

  comprovantePagamento(event) {
    this.respostaService.getRespostas().provas.comprovantePagamento = event.srcElement.files[0];
  }

  comprovanteSerasa(event) {
    this.respostaService.getRespostas().provas.comprovanteNegativacao = event.srcElement.files[0];
  }

  contratoFatura(event) {
    this.respostaService.getRespostas().provas.contratoFatura = event.srcElement.files[0];
  }

  outraProva(event) {
    this.respostaService.getRespostas().provas.outraProva = event.srcElement.files[0];
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
