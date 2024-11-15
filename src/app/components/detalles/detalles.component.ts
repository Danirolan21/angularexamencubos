import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { Comentario } from '../../models/comentario';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{

  public cubo!: Cubo;
  public idCubo!: number;
  public comentarios!: Array<Comentario>;

  constructor(
    private _service: ServiceCubos,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      this.idCubo = parametros['id'];
    })
    this._service.getComentariosCubo(this.idCubo).subscribe(result => {
      this.comentarios = result
    })
    this._service.findCubo(this.idCubo).subscribe(result => {
      this.cubo = result
    })
  }
}