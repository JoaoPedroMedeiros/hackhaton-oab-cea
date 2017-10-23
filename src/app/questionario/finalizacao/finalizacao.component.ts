import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent extends PerguntaComponent {

  constructor(protected respostaService: RespostaService) {
    super(respostaService);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  onChange(event) {
    console.log(event);
    var files = event.srcElement.files;
    console.log(files);

    console.log(files);
  }

  pdf() {
    // var doc = new jsPDF();
    // doc.text(20, 20, 'Hello world!');
    // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    // doc.addPage();
    // doc.text(20, 20, 'Do you like that?');

    // // Save the PDF
    // doc.save('Test.pdf');

    // var doc = new jsPDF();
    
    // doc.setFontSize(40);
    // doc.text(35, 25, 'Paranyan loves jsPDF');
    // doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);

    // doc.save('test.pdf'); 
  }

  titulo(): string {
    return '';
  }
  descricao(): string {
    return '';
  }
}
