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

    let empresa4 = new Empresa('00.000.000/0001-91', 'BANCO DO BRASIL SA');
    empresa4.email = 'cenop.bsb.cnpj@bb.com.br';
    empresa4.telefone = '(61) 3310-7474';
    empresa4.cep = '70.040-250';
    empresa4.uf = 'DF';
    empresa4.municipio = 'BRASILIA';
    empresa4.logradouro = 'ST ST SAUN SETOR DE AUTARQUIAS NORTE SN QUADRA 05';
    empresa4.bairro = '';
    empresa4.numero = '';
    empresa4.complemento = '';
    
    
    let empresa5 = new Empresa('02.558.157/0001-62', 'TELEFONICA BRASIL S.A.');
    empresa5.email = 'telefonica@telefonica.com';
    empresa5.telefone = '(11) 3430-0000';
    empresa5.cep = '04.571-936';
    empresa5.uf = 'SP';
    empresa5.municipio = 'SAO PAULO';
    empresa5.logradouro = 'AV ENGENHEIRO LUIZ CARLOS BERRINI, 1376';
    empresa5.bairro = 'CIDADE MONCOES';
    empresa5.numero = '1376';
    empresa5.complemento = '';
    
    
    let empresa6 = new Empresa('05.423.963/0001-11', 'OI MOVEL S.A.');
    empresa6.email = 'ld-atendimentoafiscalizacao-diretos@oi.net.br';
    empresa6.telefone = '(21) 3131-3589 / (21) 3131-3100';
    empresa6.cep = '70.713-900';
    empresa6.uf = 'DF';
    empresa6.municipio = 'BRASILIA';
    empresa6.logradouro = 'ST SETOR COMERCIAL NORTE, QUADRA 03, BL. A';
    empresa6.bairro = 'ASA NORTE';
    empresa6.numero = 'SN';
    empresa6.complemento = 'ANDAR TERREO-PARTE 2 ED.ESTACAO TEL. CENTRO NORTE';
    
    
    let empresa7 = new Empresa('60.746.948/0001-12', 'BANCO BRADESCO S.A.');
    empresa7.email = '';
    empresa7.telefone = '(11) 3684-5122';
    empresa7.cep = '06.029-900';
    empresa7.uf = 'SP';
    empresa7.municipio = 'OSASCO';
    empresa7.logradouro = 'NUC CIDADE DE DEUS';
    empresa7.bairro = 'VILA YARA';
    empresa7.numero = 'S/N';
    empresa7.complemento = '';
    
    
    let empresa8 = new Empresa('00.360.305/0001-04', 'CAIXA ECONOMICA FEDERAL');
    empresa8.email = 'gecol@caixa.gov.br';
    empresa8.telefone = '(61) 4149-290';
    empresa8.cep = '70.092-900';
    empresa8.uf = 'DF';
    empresa8.municipio = 'BRASILIA';
    empresa8.logradouro = 'SBS QUADRA 4 BLOCO A LOTE';
    empresa8.bairro = 'ASA SUL';
    empresa8.numero = '03/04.';
    empresa8.complemento = 'PRESI/GECOL 21 ANDAR';
    
    
    let empresa9 = new Empresa('03.634.220/0001-65', 'BANCO HONDA S/A.');
    empresa9.email = 'contabilidade@honda.com.br';
    empresa9.telefone = '(11) 5576-9959';
    empresa9.cep = '04.710-090';
    empresa9.uf = 'SP';
    empresa9.municipio = 'SAO PAULO';
    empresa9.logradouro = 'R DOUTOR JOSE AUREO BUSTAMANTE';
    empresa9.bairro = 'SANTO AMARO';
    empresa9.numero = '377';
    empresa9.complemento = '3 ANDAR';
    
    
    let empresa10 = new Empresa('60.701.190/0001-04', 'ITAU UNIBANCO S.A.');
    empresa10.email = 'unidadedeatendimentoafiscalizacao@correio.itau.com.br';
    empresa10.telefone = '(11) 5019-8233';
    empresa10.cep = '04.344-902';
    empresa10.uf = 'SP';
    empresa10.municipio = 'SAO PAULO';
    empresa10.logradouro = 'PC ALFREDO EGYDIO DE SOUZA ARANHA';
    empresa10.bairro = 'PARQUE JABAQUARA';
    empresa10.numero = '100';
    empresa10.complemento = 'TORRE OLAVO SETUBAL';
    
    
    let empresa11 = new Empresa('40.432.544/0001-47', 'CLARO S.A.');
    empresa11.email = 'controlelegalizacoes.matriz@claro.com.br';
    empresa11.telefone = '(11) 2111-2165';
    empresa11.cep = '04.709-110';
    empresa11.uf = 'SP';
    empresa11.municipio = 'SAO PAULO';
    empresa11.logradouro = 'R HENRI DUNANT';
    empresa11.bairro = 'SANTO AMARO';
    empresa11.numero = '780';
    empresa11.complemento = 'TORRE A E TORRE B';
    
    
    let empresa12 = new Empresa('62.307.848/0001-15', 'BANCO RCI BRASIL S.A');
    empresa12.email = 'juridico.rci@rcibanque.com';
    empresa12.telefone = '(41) 3025-1534';
    empresa12.cep = '80.250-080';
    empresa12.uf = 'PR';
    empresa12.municipio = 'CURITIBA';
    empresa12.logradouro = 'R PASTEUR';
    empresa12.bairro = 'BATEL';
    empresa12.numero = '463';
    empresa12.complemento = '4º ANDAR';
    
    
    let empresa13 = new Empresa('90.400.888/0001-42', 'BANCO SANTANDER (BRASIL) S.A.');
    empresa13.email = '';
    empresa13.telefone = '(11) 3012-7008';
    empresa13.cep = '04.543-011';
    empresa13.uf = 'SP';
    empresa13.municipio = 'SP	SAO PAULO';
    empresa13.logradouro = 'AV PRESIDENTE JUSCELINO KUBITSCHEK';
    empresa13.bairro = 'VILA OLIMPIA';
    empresa13.numero = '2041';
    empresa13.complemento = 'E 2235 - BLOCO A';

    this.empresas.push(empresa1);
    this.empresas.push(empresa3);
    this.empresas.push(empresa4);
    this.empresas.push(empresa5);
    this.empresas.push(empresa6);
    this.empresas.push(empresa7);
    this.empresas.push(empresa8);
    this.empresas.push(empresa9);
    this.empresas.push(empresa10);
    this.empresas.push(empresa11);
    this.empresas.push(empresa12);
    this.empresas.push(empresa13);
  }
}
