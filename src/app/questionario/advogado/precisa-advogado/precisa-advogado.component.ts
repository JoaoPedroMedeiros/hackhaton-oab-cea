import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../../pergunta-component-custom';
import { RespostaService } from '../../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-precisa-advogado',
  templateUrl: './precisa-advogado.component.html',
  styleUrls: ['./precisa-advogado.component.css']
})
export class PrecisaAdvogadoComponent extends PerguntaComponent {

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
