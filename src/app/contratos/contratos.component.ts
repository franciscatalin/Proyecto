import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratoService } from '../contrato.service';


@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  contratos: Contrato[];
  selectedContrato: Contrato;
  newContrato: Contrato = {
    NoContrato: null,
    Nombre: null,
    Apellido: null,
    Puesto: null,
    Categoria: null,
    TipoContrato: null,
    Sueldo: null,
    NoCandidato: null,
    FechaInicio: null,
    FechaFin: null
    
  };

  getContratos(): void {
    this.contratoService.getContratos()
        .subscribe((contratos) => this.contratos = contratos);
  }

  constructor(private contratoService: ContratoService) { }

  addContrato(): void {
    this.contratoService.addContrato(this.newContrato)
      .subscribe(() => {
        this.contratos.push(this.newContrato);
        this.newContrato = {
          NoContrato: null,
          Nombre: null,
          Apellido: null,
          Puesto: null,
          Categoria: null,
          TipoContrato: null,
          Sueldo: null,
          NoCandidato: null,
          FechaInicio: null,
          FechaFin: null
          
        };    
      });
  }
  onEdit(contrato: Contrato): void {
    this.selectedContrato = contrato;
  }

  onDelete(contrato: Contrato): void {
    this.selectedContrato = contrato;
  }

  ngOnInit() {
    this.getContratos();
  }

}

