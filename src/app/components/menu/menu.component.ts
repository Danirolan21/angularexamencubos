import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Marca } from '../../models/marca';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public marcas!: Array<Marca>;

  constructor(
    private _service: ServiceCubos
  ) {}

  ngOnInit(): void {
    this._service.getMarcas().subscribe(result => {
      this.marcas = result
    })
  }
}
