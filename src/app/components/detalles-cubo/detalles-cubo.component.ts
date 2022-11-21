import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-detalles-cubo',
  templateUrl: './detalles-cubo.component.html',
  styleUrls: ['./detalles-cubo.component.css']
})
export class DetallesCuboComponent implements OnInit {
  public comentarios!: Array<Comentario>
  public cubo!: Cubo;
  public loading!: boolean;

  constructor(private _service: CuboService, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activateRoute.params.subscribe((parametros: Params) => {
      if(parametros['id'] != undefined){
        this.loading = true;
        this.getCubo(parametros['id'])
        this.getComentarios(parametros['id']);
        console.log(this.comentarios)
        this.loading = false;
      }
    });

  }

  getCubo(id:string){

    this._service.getCubo(id).subscribe(response => {
      this.cubo = response;
    })

  }

  getComentarios(id: string){

    this._service.getComentariosByCubo(id).subscribe(response => {
      this.comentarios = response;
    })

  }

}
