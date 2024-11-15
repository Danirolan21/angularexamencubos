import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  @ViewChild("cajaemail") cajaemail: ElementRef;
  @ViewChild("cajapassword") cajapassword: ElementRef;
  public user!: User;

  constructor(
    private _service: ServiceCubos,
    private _router: Router
  ) {
    this.cajaemail = new ElementRef("");
    this.cajapassword = new ElementRef("");
  }

  iniciarSesion(): void {
    let email = this.cajaemail.nativeElement.value;
    let password = this.cajapassword.nativeElement.value;
    this.user = new User(email, password);
    this._service.logIn(this.user).subscribe(result => {
      this._service.token = result.response;
      console.log(result.response);
      this._router.navigate(['/perfil'])
    })
  }
}
