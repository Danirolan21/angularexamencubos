import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { ServiceCubos } from './services/service.cubos';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    PerfilComponent,
    PedidosComponent,
    ComprasComponent,
    DetallesComponent,
    CubosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceCubos, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
