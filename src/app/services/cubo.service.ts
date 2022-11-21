import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable()
export class CuboService{

    constructor(private _http: HttpClient){}

    getCubos(): Observable<any>{

        var request = environment.url + "api/cubos";
        return this._http.get(request);

    }

    getCubo(id:any): Observable<any>{

        var request = environment.url + "api/cubos/" + id;
        return this._http.get(request);

    }

    getMarcas(): Observable<any>{

        var request = environment.url + "api/cubos/marcas";
        return this._http.get(request)

    }

    getCubosMarca(marca: string): Observable<any>{

        var request = environment.url + "api/cubos/cubosmarca/" + marca;
        return this._http.get(request);

    }

    getComentariosByCubo(id: any): Observable<any>{

        var request = environment.url + "/api/comentariosCubo/getcomentariosCubo/" + id;
        return this._http.get(request);

    }

}