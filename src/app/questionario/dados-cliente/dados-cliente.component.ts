import { Component, OnInit } from '@angular/core';
import { PerguntaComponent } from '../pergunta-component-custom';
import { RespostaService } from '../service/resposta.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Respostas } from '../model/Respostas';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent extends PerguntaComponent {

  respostas: Respostas;

  public cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  public data = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public foneRes = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public cel = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public cep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  public estados = [
    {sigla: 'AC'},
    {sigla: 'AL'},	 
    {sigla: 'AP'},	 
    {sigla: 'AM'},	 
    {sigla: 'BA'},	 
    {sigla: 'CE'},	 
    {sigla: 'DF'},	 
    {sigla: 'ES'},	 
    {sigla: 'GO'},	 
    {sigla: 'MA'},	 
    {sigla: 'MT'},
    {sigla: 'MS'}, 
    {sigla: 'MG'},	 
    {sigla: 'PA'},	 
    {sigla: 'PB'},	 
    {sigla: 'PR'},	 
    {sigla: 'PE'},	 
    {sigla: 'PI'},	 
    {sigla: 'RJ'},	 
    {sigla: 'RN'},	 
    {sigla: 'RS'},	 
    {sigla: 'RO'},	 
    {sigla: 'RR'},	 
    {sigla: 'SC'},	 
    {sigla: 'SP'},	 
    {sigla: 'SE'},	 
    {sigla: 'TO'}
  ];

  constructor(protected respostaService: RespostaService) {
    super(respostaService);

    this.respostas = respostaService.getRespostas();
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
