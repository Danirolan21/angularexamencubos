import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Compra } from '../../models/compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit{

  public compras!: Array<Compra>;

  constructor(
    private _service: ServiceCubos
  ) {}

  ngOnInit(): void {
    this._service.getCompras().subscribe(result => {
      this.compras = result
    })
  }
}

