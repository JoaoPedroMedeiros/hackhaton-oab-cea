import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Empresa } from '../../model/Empresa';

@Component({
  selector: 'app-modal-procurar-cnpj',
  templateUrl: './modal-procurar-cnpj.component.html',
  styleUrls: ['./modal-procurar-cnpj.component.css']
})
export class ModalProcurarCnpjComponent extends DialogComponent<any, Empresa> {

  filtro: string = '';

  empresas: Empresa[] = [];

  filtradas: Empresa[] = [];

  constructor(dialogService: DialogService) {
    super(dialogService);

    this.gerarEmpresas();
  }

  getEmpresas(): Empresa[] {
    if (this.filtro === null || this.filtro === '') {
      return this.empresas;
    }

    while (this.filtradas.pop());

    // const filtradas: Empresa[] = [];
    for (let i = 0; i < this.empresas.length; i++) {
      if (this.empresas[i].razaosocial.toUpperCase().indexOf(this.filtro.toUpperCase()) > -1)
        this.filtradas.push(this.empresas[i]);
    }
    
    return this.filtradas;
  }

  retornar(empresa: Empresa) {
    this.result = empresa;
    this.close();
  }

  gerarEmpresas() {
    let empresa1 = new Empresa('04.206.050/0001-80', 'TIM CELULAR S.A.');
    empresa1.email = 'pdsferreira@timbrasil.com.br';
    empresa1.telefone = '(21) 4112-7138';
    empresa1.cep = '05.724-006';
    empresa1.uf = 'SP';
    empresa1.municipio = 'São Paulo';
    empresa1.logradouro = 'AV GIOVANNI GRONCHI';
    empresa1.bairro = 'VILA ANDRADE';
    empresa1.numero = '123';
    empresa1.complemento = '  ';

    let empresa2 = new Empresa('02.558.157/0001-62', 'TELEFONICA BRASIL S.A.');
    empresa2.email = 'telefonica@telefonica.com';
    empresa2.telefone = '(11) 3430-0000';
    empresa2.cep = '04.571-936';
    empresa2.uf = 'SP';
    empresa2.municipio = 'SAO PAULO';
    empresa2.logradouro = 'AV CIQUE';
    empresa2.bairro = 'AURORA';
    empresa2.numero = '542';
    empresa2.complemento = '';

    let empresa3 = new Empresa('02.012.862/0001-60', 'TAM LINHAS AEREAS S/A.');
    empresa3.email = 'fiscal@tam.com.br';
    empresa3.telefone = '(11) 5582-9813';
    empresa3.cep = '04.719-002';
    empresa3.uf = 'SP';
    empresa3.municipio = 'SAO PAULO';
    empresa3.logradouro = 'COMENDADOR';
    empresa3.bairro = 'OSASCO';
    empresa3.numero = '6542';
    empresa3.complemento = '';

    this.empresas.push(empresa1);
    this.empresas.push(empresa2);
    this.empresas.push(empresa3);
  }
}
