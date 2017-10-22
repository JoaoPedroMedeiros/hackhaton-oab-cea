import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from './service/resposta.service';

export abstract class PerguntaComponent implements OnInit, CanActivate {
  
  constructor(protected respostaService: RespostaService) { }

  ngOnInit(): void { }

  abstract canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;

  abstract titulo() : string;

  abstract descricao() : string;
}
