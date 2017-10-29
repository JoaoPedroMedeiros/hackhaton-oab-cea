import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Respostas } from '../model/Respostas';
import { Exporter } from '../../../pdf-exporter/Exporter';

@Component({
  selector: 'app-peticao',
  templateUrl: './peticao.component.html',
  styleUrls: ['./peticao.component.css']
})
export class PeticaoComponent extends PerguntaComponent {

  respostas: Respostas;

  assunto: string;

  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
    /*
    * 1 - Cobraram o que já foi pago
    * 2 - Cobraram uma taxa que não contratei
    * 3 - Cobraram por um serviço que nunca requisitei/utilizei
    * 4 - Cobraram um valor maior do que eu contratei
    */
    this.assunto = '';
    if (this.respostas.problema = 1)
      this.assunto = 'Cobraram o que já foi pago';
    if (this.respostas.problema = 2)
      this.assunto = 'Cobraram uma taxa que não contratei';
    if (this.respostas.problema = 3)
      this.assunto = 'Cobraram por um serviço que nunca requisitei/utilizei';
    if (this.respostas.problema = 4)
      this.assunto = 'Cobraram um valor maior do que eu contratei';
  }

  fileEvent4(fileInput) {
    this.respostaService.getRespostas().provas.push(fileInput.srcElement.files[0]);
  }

  fileEvent3(fileInput) {
    this.respostaService.getRespostas().provas.push(fileInput.srcElement.files[0]);
  }

  fileEvent2(fileInput) {
    this.respostaService.getRespostas().provas.push(fileInput.srcElement.files[0]);
  }

  fileEvent1(fileInput) {
    this.respostaService.getRespostas().provas.push(fileInput.srcElement.files[0]);
  }

  pdf() {
    let pdf: Exporter = new Exporter(new jsPDF());
    pdf.addTitle("Requerimento");
    pdf.addSubtitleFirst("Dados do reclamante");
    pdf.lineTitleFirst();
    pdf.addSubtitleSecond("Dados do reclamado");
    pdf.lineTitleSecond();

    pdf.addHeaderItemKey(1, "Nome:");
    pdf.addHeaderItemKey(2, "Data nasc.:");
    pdf.addHeaderItemKey(3, "Endereço:");
    pdf.addHeaderItemKey(4, "Bairro:");
    pdf.addHeaderItemKey(5, "Cidade:");
    pdf.addHeaderItemKey(6, "CEP:");
    pdf.addHeaderItemKey(7, "RG:");
    pdf.addHeaderItemKey(8, "Org. Exp.:");
    pdf.addHeaderItemKey(9, "CPF:");
    pdf.addHeaderItemKey(10, "E-mail:");
    pdf.addHeaderItemKey(11, "Fone res.:");
    pdf.addHeaderItemKey(12, "Celular:");

    if (this.respostaService.getRespostas().dadosCliente.nome != null)
      pdf.addHeaderItemValue(1, this.respostaService.getRespostas().dadosCliente.nome);
    if (this.respostaService.getRespostas().dadosCliente.dataNasc != null)
      pdf.addHeaderItemValue(2, this.respostaService.getRespostas().dadosCliente.dataNasc);
    if (this.respostaService.getRespostas().dadosCliente.endereco != null)
      pdf.addHeaderItemValue(3, this.respostaService.getRespostas().dadosCliente.endereco);
    if (this.respostaService.getRespostas().dadosCliente.bairro != null)
      pdf.addHeaderItemValue(4, this.respostaService.getRespostas().dadosCliente.bairro);
    if (this.respostaService.getRespostas().dadosCliente.cidade != null)
      pdf.addHeaderItemValue(5, this.respostaService.getRespostas().dadosCliente.cidade);
    if (this.respostaService.getRespostas().dadosCliente.cep != null)
      pdf.addHeaderItemValue(6, this.respostaService.getRespostas().dadosCliente.cep);
    if (this.respostaService.getRespostas().dadosCliente.rg != null)
      pdf.addHeaderItemValue(7, this.respostaService.getRespostas().dadosCliente.rg);
    if (this.respostaService.getRespostas().dadosCliente.orgaoExpeditor != null)
      pdf.addHeaderItemValue(8, this.respostaService.getRespostas().dadosCliente.orgaoExpeditor);
    if (this.respostaService.getRespostas().dadosCliente.cpf != null)
      pdf.addHeaderItemValue(9, this.respostaService.getRespostas().dadosCliente.cpf);
    if (this.respostaService.getRespostas().dadosCliente.email != null)
      pdf.addHeaderItemValue(10, this.respostaService.getRespostas().dadosCliente.email);
    if (this.respostaService.getRespostas().dadosCliente.telefoneRes != null)
      pdf.addHeaderItemValue(11, this.respostaService.getRespostas().dadosCliente.telefoneRes);
    if (this.respostaService.getRespostas().dadosCliente.celular != null)
      pdf.addHeaderItemValue(12, this.respostaService.getRespostas().dadosCliente.celular);

    pdf.addHeaderItemKey2(1, "Nome:");
    pdf.addHeaderItemKey2(2, "Endereço:");
    pdf.addHeaderItemKey2(3, "Bairro:");
    pdf.addHeaderItemKey2(4, "Cidade:");
    pdf.addHeaderItemKey2(5, "CEP:");
    pdf.addHeaderItemKey2(6, "CNPJ:");
    pdf.addHeaderItemKey2(7, "Telefone:");

    if (this.respostaService.getRespostas().empresa.razaosocial)
      pdf.addHeaderItemValue2(1, this.respostaService.getRespostas().empresa.razaosocial);
    if (this.respostaService.getRespostas().empresa.complemento)
      pdf.addHeaderItemValue2(2, this.respostaService.getRespostas().empresa.complemento);
    if (this.respostaService.getRespostas().empresa.bairro)
      pdf.addHeaderItemValue2(3, this.respostaService.getRespostas().empresa.bairro);
    if (this.respostaService.getRespostas().empresa.municipio)
      pdf.addHeaderItemValue2(4, this.respostaService.getRespostas().empresa.municipio);
    if (this.respostaService.getRespostas().empresa.cep)
      pdf.addHeaderItemValue2(5, this.respostaService.getRespostas().empresa.cep);
    if (this.respostaService.getRespostas().empresa.cnpj)
      pdf.addHeaderItemValue2(6, this.respostaService.getRespostas().empresa.cnpj);
    if (this.respostaService.getRespostas().empresa.telefone)
      pdf.addHeaderItemValue2(7, this.respostaService.getRespostas().empresa.telefone);

    pdf.addSubtitleSection1("Assunto da reclamação");
    pdf.addContentSection1(this.respostaService.getRespostas().problemaString());

    pdf.addSubtitleSection2("Valor do pedido");
    
    if (this.respostaService.getRespostas().valor != null)
      pdf.addContentSection2(this.respostaService.getRespostas().valor.toString());

    pdf.addSubtitleSection3("Narrativa resumida");
    
    if (this.respostaService.getRespostas().corpoPeticao.historia != null)
      pdf.addContentSection3(this.respostaService.getRespostas().corpoPeticao.historia);

    pdf.addSubtitleSection4("Meus direitos");
    pdf.addContentSection4();

    if (this.respostaService.getRespostas().provas.length > 0)
      pdf.addImages(this.respostaService.getRespostas().provas, () => {
        pdf.save();
      });
    else
      pdf.save();
    // pdf.save();

    // pdf.line();

    // var pdf = new jsPDF('p','pt','a4');
    // pdf.addHTML(document.getElementById('divPeticao'), 0, 0, {
    //   pagesplit: true
    // }, 
    // function() {
    //     pdf.save('web.pdf');
    // });
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
