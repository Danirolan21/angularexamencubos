import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { User } from "../models/user";
import { Observable } from "rxjs";
import { Marca } from "../models/marca";

@Injectable()
export class ServiceCubos {
    public token: string | null

    constructor(
        private _http: HttpClient
    ) {
        this.token = null
    }

    getCubos(): Observable<any> {
        let request = "api/Cubos";
        let url = environment.urlApiCubos + request;
        return this._http.get(url)
    }

    getMarcas(): Observable<any> {
        let request = "api/Cubos/Marcas";
        let url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    findCubo(id: number): Observable<any> {
        let request = "/api/Cubos/" + id;
        let url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getComentariosCubo(id: number): Observable<any> {
        let request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
        let url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getCubosMarca(marca: Marca): Observable<any> {
        let request = "/api/Cubos/CubosMarca/" + marca;
        let url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    //DEVUELVE EL TOKEN
    logIn(user: User): Observable<any> {
        let json = JSON.stringify(user);
        let request = "api/Manage/Login";
        let url = environment.urlApiCubos + request;
        let headers = new HttpHeaders().set("Content-type", "application/json")
        return this._http.post(url, json, {headers: headers});
    }

    //USA EL TOKEN
    getPerfil(): Observable<any> {
        let request = "api/Manage/PerfilUsuario";
        let url = environment.urlApiCubos + request;
        let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token)
        return this._http.get(url, {headers: headers});
    }

    //USA EL TOKEN
    getCompras(): Observable<any> {
        let request = "api/Compra/ComprasUsuario";
        let url = environment.urlApiCubos + request;
        let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token)
        return this._http.get(url, {headers: headers});
    }

    insertarPedido(idCubo: number): Observable<any> {
        let request = "api/Compra/InsertarPedido/" + idCubo;
        let url = environment.urlApiCubos + request;
        console.log(url);
        console.log(this.token);
        
        
        let headers = new HttpHeaders()
        .set("Authorization", "Bearer " + this.token)
        .set("Content-type", "application/json");
        return this._http.post(url, {}, {headers: headers});
    }
}