import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

import { RespostaService } from './service/resposta.service';
import { ProblemaComponent } from './problema/problema.component';
import { QuestionarioComponent } from './questionario.component';
import { NomeComponent } from './nome/nome.component';
import { Valor20Component } from './valor20/valor20.component';
import { CorpoPeticaoComponent } from './corpo-peticao/corpo-peticao.component';
import { SozinhoComponent } from './sozinho/sozinho.component';
import { QuemComponent } from './quem/quem.component';
import { ModalProcurarCnpjComponent } from './quem/modal-procurar-cnpj/modal-procurar-cnpj.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { ProvasComponent } from './provas/provas.component';
import { FinalizacaoComponent } from './finalizacao/finalizacao.component';
import { PeticaoComponent } from './peticao/peticao.component';
import { Valor40Component } from './valor40/valor40.component';
import { PrecisaAdvogadoComponent } from './advogado/precisa-advogado/precisa-advogado.component';
import { ListaAdvogadoComponent } from './advogado/lista-advogado/lista-advogado.component';
import { InfoAdvogadoComponent } from './advogado/info-advogado/info-advogado.component';
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { ModalTermosComponent } from './corpo-peticao/modal-termos/modal-termos.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,

    TextMaskModule,

    CurrencyMaskModule,

    BootstrapModalModule,
    // É possível mudar o placeholder onde será aberto o modal importando
    // desse jeito (Mas não vamos usar isso):
    // BootstrapModalModule.forRoot({container:document.body})
    BootstrapGridModule,

    RouterModule.forChild([
      { path: 'questionario', redirectTo: 'questionario/problema' },
      { path: 'questionario', component: QuestionarioComponent, children: [
        { path: 'problema', component: ProblemaComponent },
        { path: 'nome', component: NomeComponent },
        { path: 'valor20', component: Valor20Component },
        { path: 'valor40', component: Valor40Component },
        { path: 'advogado/precisa-advogado', component: PrecisaAdvogadoComponent},
        { path: 'advogado/lista-advogado', component: ListaAdvogadoComponent },
        { path: 'corpo-peticao', component: CorpoPeticaoComponent},
        { path: 'sozinho', component: SozinhoComponent},
        { path: 'quem', component: QuemComponent},
        { path: 'dados-cliente', component: DadosClienteComponent},
        { path: 'provas', component: ProvasComponent},
        { path: 'finalizacao', component: FinalizacaoComponent},
        { path: 'peticao', component: PeticaoComponent}
      ]},
    ])
  ],
  declarations: [
    QuestionarioComponent,
    ProblemaComponent,
    NomeComponent,
    Valor20Component,
    CorpoPeticaoComponent,
    SozinhoComponent,
    QuemComponent,
    ModalProcurarCnpjComponent,
    DadosClienteComponent,
    ProvasComponent,
    FinalizacaoComponent,
    PeticaoComponent,
    Valor40Component,
    PrecisaAdvogadoComponent,
    ListaAdvogadoComponent,
    InfoAdvogadoComponent,
    ModalTermosComponent
  ],
  entryComponents: [
    ModalProcurarCnpjComponent,
    ModalTermosComponent,
    InfoAdvogadoComponent
  ],
  exports: [
    QuestionarioComponent
  ],
  providers: [
    RespostaService,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig } 
  ]
})
export class QuestionarioModule { }
