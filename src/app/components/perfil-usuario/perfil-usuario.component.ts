import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/models/compra';
import { CompraCubo } from 'src/app/models/compraCubo';
import { Cubo } from 'src/app/models/cubo';
import { PerfilUsuario } from 'src/app/models/perfilusuario';
import { CuboService } from 'src/app/services/cubo.service';
import { PerfilUsuarioService } from 'src/app/services/perfilusuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  public perfil!: PerfilUsuario;
  public compras!: Array<Compra>;
  public comprasCubo!: Array<CompraCubo>;
  public loading!: boolean;
  
  constructor(private _service: PerfilUsuarioService, private _serviceCubo: CuboService, private _router: Router) {
    this.comprasCubo = []
  }

  ngOnInit(): void {

    if(localStorage.getItem("token") != ""){

      this.loading = true;
      this.getPerfil();
      this.getCompras();

    } else {

      this._router.navigateByUrl("/")

    }
    
  }

  getComprasFilter(){

    this.compras = this.compras.filter(compra => compra.idUsuario == this.perfil.idUsuario);
    for (let compra of this.compras) {
      this.getCubo(compra.idCubo, compra.fechaPedido)
    }
    console.log(this.comprasCubo)
    this.loading = false;

  }

  getCubo(id:any, fecha:string){

    var cubo!: Cubo;
    this._serviceCubo.getCubo(id).subscribe(response => {
      cubo = response;
      this.comprasCubo.push(new CompraCubo(cubo, fecha))
    })
    return cubo;

  }

  getPerfil(){

    this._service.getPerfilUsuario().subscribe(response => {
      this.perfil = response;
    })

  }

  getCompras(){

    this._service.getComprasByUser().subscribe(response => {
      this.compras =  response;
      this.getComprasFilter()
    })

  }

}
