import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit{

  @ViewChild("selectcubos") selectcubos: ElementRef;
  public cubos!: Array<Cubo>;

  constructor(
    private _service: ServiceCubos,
    private _router: Router
  ) {
    this.selectcubos = new ElementRef(1);
  }

  ngOnInit(): void {
    this._service.getCubos().subscribe(result => {
      this.cubos = result
    })
  }

  comprarCubo(): void {
    let idCubo = this.selectcubos.nativeElement.value;
    this._service.insertarPedido(idCubo).subscribe(result => {
      this._router.navigate(['/compras'])
      console.log(result);
      
    })
  }
}

