import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CubosComponent } from "./components/cubos/cubos.component";
import { DetallesCuboComponent } from "./components/detalles-cubo/detalles-cubo.component";
import { InsertarPedidoComponent } from "./components/insertar-pedido/insertar-pedido.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";
import { RegistroComponent } from "./components/registro/registro.component";

const appRoutes: Routes = [
    {
        path: "", component: CubosComponent
    },

    {
        path: ":marca", component: CubosComponent
    },

    {
        path: "detalle/:id", component: DetallesCuboComponent
    },

    {
        path: "auth/login", component: LoginComponent
    },

    {
        path: "perfil/usuario", component: PerfilUsuarioComponent
    },

    {
        path: "insertar/pedido", component: InsertarPedidoComponent
    },

    {
        path: "registro/usuario", component: RegistroComponent
    },

    {
        path: "sesion/logout", component: LogoutComponent
    },

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)