import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../../pergunta-component-custom';
import { RespostaService } from '../../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Advogado } from '../../model/Advogado';
import { InfoAdvogadoComponent } from '../info-advogado/info-advogado.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Respostas } from '../../model/Respostas';

@Component({
  selector: 'app-lista-advogado',
  templateUrl: './lista-advogado.component.html',
  styleUrls: ['./lista-advogado.component.css']
})
export class ListaAdvogadoComponent extends PerguntaComponent {

  advogados: Advogado[] = [];

  respostas: Respostas;

  constructor(protected respostaService: RespostaService, private dialogService: DialogService) {
    super(respostaService);

    this.advogados.push(new Advogado('Dtr. João', '', '119234', '', '41996503922') );
    this.advogados.push(new Advogado('Dtra. Maria', '', '123242', '', '41996503922'));
    this.advogados.push(new Advogado('Dtr. Paulo', '', '123125', '', '41996503922'));
    this.advogados.push(new Advogado('Dtr. José', '', '321312', '', '41996503922'));
    this.advogados.push(new Advogado('Dtra. Marcia', '', '123123', '', '41996503922'));

    this.respostas = respostaService.getRespostas();
  }

  chamarInformacao(adv: Advogado) {
    let disposable = this.dialogService.addDialog(InfoAdvogadoComponent, {
      advogado: adv
    });
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
