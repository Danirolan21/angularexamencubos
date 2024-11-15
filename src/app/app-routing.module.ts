import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {
      path: "", component: HomeComponent
  },
  {
      path: "cubo/:id", component: DetallesComponent
  },
  {
      path: "cubos/:marca", component: CubosComponent
  },
  {
      path: "login", component: LoginComponent
  },
  {
      path: "register", component: RegisterComponent
  },
  {
      path: "logout", component: LogoutComponent
  },
  {
      path: "perfil", component: PerfilComponent
  },
  {
      path: "compras", component: ComprasComponent
  },
  {
      path: "pedido", component: PedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
