import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-valor20',
  templateUrl: './valor20.component.html',
  styleUrls: ['./valor20.component.css']
})
export class Valor20Component implements OnInit, CanActivate {
  
  constructor() { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('aaa');
    return false;
  }
}
