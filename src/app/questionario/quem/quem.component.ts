import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.component.html',
  styleUrls: ['./quem.component.css']
})
export class QuemComponent extends PerguntaComponent {

  constructor(protected respostaService: RespostaService) {
    super(respostaService);
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
