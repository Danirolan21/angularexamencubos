import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { Marca } from '../../models/marca';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrl: './cubos.component.css'
})
export class CubosComponent implements OnInit{

  public cubos!: Array<Cubo>;
  public marca!: Marca;

  constructor(
    private _service: ServiceCubos,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      this.marca = parametros['marca'];
    })
    this._service.getCubosMarca(this.marca).subscribe(result => {
      this.cubos = result
    })
  }
}