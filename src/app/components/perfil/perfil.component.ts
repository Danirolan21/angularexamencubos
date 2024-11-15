import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Perfil } from '../../models/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{

  public user!: Perfil;

  constructor(
    private _service: ServiceCubos
  ) {}

  ngOnInit(): void {
    this._service.getPerfil().subscribe(result => {
      this.user = result
    })
  }
}
