import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../contrato';

@Component({
  selector: '[app-editable-contrato]',
  templateUrl: './editable-contrato.component.html',
  styleUrls: ['./editable-contrato.component.css']
})
export class EditableContratoComponent implements OnInit {

  @Input() contrato: Contrato;

  editing = false;

  onEdit(): void {
      this.editing = ! this.editing;
  }

  constructor() { }

  ngOnInit() {
  }

}