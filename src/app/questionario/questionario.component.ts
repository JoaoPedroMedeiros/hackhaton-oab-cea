import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  public titulo: string;

  public descricao: string;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    // this.route.url.subscribe(url => {
    //   if (this.route.children.length > 0) {
    //     let component = this.route.children[0].component;
    //     if (component == ValorComponent) {
    //       this.titulo = this.perguntaValor.titulo();
    //       this.descricao = this.perguntaValor.descricao();
    //     }
    //     else if (component == QuemComponent) {
    //       this.titulo = this.perguntaQuem.titulo();
    //       this.descricao = this.perguntaQuem.descricao();
    //     }
    //     else if (component == DadosClienteComponent) {
    //       this.titulo = this.perguntaDadosCliente.titulo();
    //       this.descricao = this.perguntaDadosCliente.descricao();
    //     }
    //     else if (component == ProblemaComponent) {
    //       this.titulo = this.perguntaProblema.titulo();
    //       this.descricao = this.perguntaProblema.descricao();
    //     }
    //     else if (component == ProblemaComponent) {
    //       this.titulo = this.perguntaProblema.titulo();
    //       this.descricao = this.perguntaProblema.descricao();
    //     }
    //     else if (component == CorpoPeticaoComponent) {
    //       this.titulo = this.perguntaCorpoPeticao.titulo();
    //       this.descricao = this.perguntaCorpoPeticao.descricao();
    //     }
    //     else if (component == ProvasComponent) {
    //       this.titulo = this.perguntaProvas.titulo();
    //       this.descricao = this.perguntaProvas.descricao();
    //     }
    //   }
    // });
  }
}
