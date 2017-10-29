import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Exporter } from '../../../pdf-exporter/Exporter';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent extends PerguntaComponent {

  gerando: boolean = false;

  respostas: Respostas;

  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
  }

  salvarPeticao() {
    this.gerando = true;
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
    if (this.respostaService.getRespostas().empresa.logradouro)
      pdf.addHeaderItemValue2(2, this.respostaService.getRespostas().empresa.logradouro);
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
      pdf.addContentSection2('R$ ' + this.respostaService.getRespostas().valor.toString());

    pdf.addSubtitleSection3("Narrativa resumida");
    
    if (this.respostaService.getRespostas().corpoPeticao.historia != null)
      pdf.addContentSection3(this.respostaService.getRespostas().corpoPeticao.historia);

    pdf.addSubtitleSection4("Meus direitos");
    pdf.addContentSection4();

    const provas: any[] = [];
    const titulos: any[] = [];
    if (this.respostaService.getRespostas().provas.comprovanteNegativacao != null) {
      provas.push(this.respostaService.getRespostas().provas.comprovanteNegativacao);
      titulos.push("Comprovante de negativação");
    }
    
    if (this.respostaService.getRespostas().provas.comprovantePagamento != null) {
      provas.push(this.respostaService.getRespostas().provas.comprovantePagamento);
      titulos.push("Comprovante de pagamento");
    }
    
    if (this.respostaService.getRespostas().provas.contratoFatura != null) {
      provas.push(this.respostaService.getRespostas().provas.contratoFatura);
      titulos.push("Fatura");
    }
    
    if (this.respostaService.getRespostas().provas.outraProva != null) {
      provas.push(this.respostaService.getRespostas().provas.outraProva);
      titulos.push("Outra prova");
    }

    if (provas.length > 0)
      try {
        pdf.addImages(provas, titulos, () => {
          pdf.save();
          this.gerando = false;
        });
      }
      catch (e) {
        alert('Desculpe-nos, uma de suas provas tem um tamanho acima do suportado pela nossa plataforma, mas nós estamos ' +
          'trabalhando para suportar isso. Tente diminuir o tamanho de sua imagem e tente novamente.');
      }
    else {
      pdf.save();
      this.gerando = false;
    }
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
