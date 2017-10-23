import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Empresa } from '../../model/Empresa';

@Component({
  selector: 'app-modal-procurar-cnpj',
  templateUrl: './modal-procurar-cnpj.component.html',
  styleUrls: ['./modal-procurar-cnpj.component.css']
})
export class ModalProcurarCnpjComponent extends DialogComponent<any, Empresa> {

  empresas: Empresa[] = [];

  constructor(dialogService: DialogService) {
    super(dialogService);

    this.empresas.push(new Empresa('0000000', 'TIM'));
    this.empresas.push(new Empresa('0000001', 'TIM1'));
    this.empresas.push(new Empresa('0000002', 'TIM2'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));

    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
    this.empresas.push(new Empresa('0000003', 'TIM3'));
  }

  retornar(empresa: Empresa) {
    this.result = empresa;
    this.close();
  }
}
