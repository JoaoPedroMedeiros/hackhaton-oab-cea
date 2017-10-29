import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Empresa } from '../model/Empresa';
import { Http, Headers } from '@angular/http';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalProcurarCnpjComponent } from './modal-procurar-cnpj/modal-procurar-cnpj.component';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.component.html',
  styleUrls: ['./quem.component.css']
})
export class QuemComponent extends PerguntaComponent {

  empresa: Empresa;

  respostas: Respostas;

  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(protected respostaService: RespostaService, private dialogService: DialogService, private http: Http) {
    super(respostaService);

    this.empresa = respostaService.getRespostas().empresa;

    this.respostas = respostaService.getRespostas();
  }

  abrirModalBuscarEmpresa() {
    let disposable = this.dialogService.addDialog(ModalProcurarCnpjComponent).
      subscribe((empresa) => {
        this.respostaService.getRespostas().empresa = empresa;
        this.empresa = this.respostaService.getRespostas().empresa;
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

  changeCnpj(cnpj: string) {
    console.log(cnpj);
    if (this.validarCNPJ(cnpj)) {
      this.http.get('http://consumidoremacao.com.br/cea_admin/cnpjrest?cnpj=' + cnpj, { headers: this.getHeaders()}).subscribe((empresa) => {
        console.log(empresa);
      });
    }
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  validarCNPJ(cnpj): boolean {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
      return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return false;

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
      return false;

    return true;
  }
}
