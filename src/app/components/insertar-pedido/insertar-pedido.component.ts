import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';
import { PerfilUsuarioService } from 'src/app/services/perfilusuario.service';

@Component({
  selector: 'app-insertar-pedido',
  templateUrl: './insertar-pedido.component.html',
  styleUrls: ['./insertar-pedido.component.css']
})
export class InsertarPedidoComponent implements OnInit {
  public cubos!: Array<Cubo>;

  @ViewChild("selectcubo") selectCubo!: ElementRef;

  constructor(private _service: PerfilUsuarioService, private _serviceCubo: CuboService, private _router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("token") != ""){

      this._serviceCubo.getCubos().subscribe(response => {
        this.cubos = response;
      });

    } else {

      this._router.navigateByUrl("/")

    }
  }

  insertar(){

    this._service.postPedido(this.selectCubo.nativeElement.value).subscribe(response => {
      this._router.navigateByUrl("/perfil/usuario")
    });

  }

}
