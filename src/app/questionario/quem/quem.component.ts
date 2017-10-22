import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Empresa } from '../model/Empresa';
import { Http } from '@angular/http';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalProcurarCnpjComponent } from './modal-procurar-cnpj/modal-procurar-cnpj.component';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.component.html',
  styleUrls: ['./quem.component.css']
})
export class QuemComponent extends PerguntaComponent {

  empresa: Empresa;

  constructor(protected respostaService: RespostaService, private dialogService: DialogService, private http: Http) {
    super(respostaService);

    this.empresa = respostaService.getRespostas().empresa;
  }

  consultar() {
    
  }

  abrirModalBuscarEmpresa() {
    let disposable = this.dialogService.addDialog(ModalProcurarCnpjComponent).
    subscribe((isConfirmed) => {
        
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 100000)
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
