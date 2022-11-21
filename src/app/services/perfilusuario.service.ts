import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { PerfilUsuario } from "../models/perfilusuario";

@Injectable()
export class PerfilUsuarioService{

    constructor(private _http: HttpClient){}

    login(email: string, password: string): Observable<any>{

        var request = environment.url + "/api/manage/login";
        return this._http.post(request, {email: email, password: password})

    }

    getPerfilUsuario(): Observable<any>{

        var request = environment.url + "/api/manage/perfilusuario";
        var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
        return this._http.get(request, {headers: header})

    }

    getComprasByUser(): Observable<any>{

        var request = environment.url + "api/compra/comprasusuario";
        var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
        return this._http.get(request, {headers: header});

    }

    postPedido(id:any){

        var request = environment.url + "/api/compra/insertarpedido/" + id;
        var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
        return this._http.post(request, "",{headers: header});

    }

    registro(user: PerfilUsuario){

        var request = environment.url + "/api/Manage/registrousuario";
        return this._http.post(request, user);
    }

}