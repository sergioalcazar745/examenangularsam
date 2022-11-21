import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { CuboService } from './services/cubo.service';
import { PerfilUsuarioService } from './services/perfilusuario.service';
import { InsertarPedidoComponent } from './components/insertar-pedido/insertar-pedido.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CubosComponent,
    DetallesCuboComponent,
    LoginComponent,
    RegistroComponent,
    PerfilUsuarioComponent,
    MenuComponent,
    InsertarPedidoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders , CuboService, PerfilUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
