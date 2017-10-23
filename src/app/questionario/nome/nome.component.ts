import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent extends PerguntaComponent {

  respostas: Respostas;

  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
  titulo(): string {
    return 'Relaxe, nós vamos te ajudar a resolver esta situação!';
  }
  descricao(): string {
    return 'Que pena que você passou por isso. Mas fique tranquilo. Nós vamos te ajudar a dar entrada no seu processo.';
  }
}
