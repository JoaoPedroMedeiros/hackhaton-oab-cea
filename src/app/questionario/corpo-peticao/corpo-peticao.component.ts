import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalTermosComponent } from './modal-termos/modal-termos.component';

@Component({
  selector: 'app-corpo-peticao',
  templateUrl: './corpo-peticao.component.html',
  styleUrls: ['./corpo-peticao.component.css']
})
export class CorpoPeticaoComponent extends PerguntaComponent {

  respostas: Respostas;

  aceito: boolean = false;

  public data = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(protected respostaService: RespostaService, private dialogService: DialogService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
  }

  termos() {
    let disposable = this.dialogService.addDialog(ModalTermosComponent);
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
