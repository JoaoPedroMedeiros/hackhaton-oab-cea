import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Respostas } from '../model/Respostas';

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

  pdf() {
    var pdf = new jsPDF('p','pt','a4');
    pdf.addHTML(document.getElementById('divPeticao'), 0, 0, {
      pagesplit: true
    }, function() {
            pdf.save('web.pdf');
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
