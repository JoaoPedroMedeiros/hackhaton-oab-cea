import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Empresa } from '../../model/Empresa';

@Component({
  selector: 'modal-termos',
  templateUrl: './modal-termos.component.html',
  styleUrls: ['./modal-termos.component.css']
})
export class ModalTermosComponent extends DialogComponent<any, Empresa> {

  constructor(dialogService: DialogService) {
    super(dialogService);

    
  }
}
