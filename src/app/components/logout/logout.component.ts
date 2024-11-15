import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  public mensaje!: string;

  constructor(
    private _service: ServiceCubos
  ) {}

  ngOnInit(): void {
    if (this._service.token != null) {
      this._service.token == null;
      this.mensaje = "Usuario logueado, cerrado sesion con exito...";
    }
  }
}
