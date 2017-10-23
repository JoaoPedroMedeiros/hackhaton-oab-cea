import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../../pergunta-component-custom';
import { RespostaService } from '../../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Advogado } from '../../model/Advogado';

@Component({
  selector: 'app-info-advogado',
  templateUrl: './info-advogado.component.html',
  styleUrls: ['./info-advogado.component.css']
})
export class InfoAdvogadoComponent extends DialogComponent<InfoAdvogadoComponent, boolean> {

  advogado: Advogado;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  retornar() {
    this.close();
  }
}

export interface TemAdvogado {

  advogado: Advogado;
}
