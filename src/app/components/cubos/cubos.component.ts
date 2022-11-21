import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;
  public loading!: boolean;

  constructor(private _service: CuboService, private _activateRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this._activateRoute.params.subscribe((paramentros: Params) => {
      this.loading = true;
      if(paramentros['marca'] != undefined){
        this.getCubosMarca(paramentros['marca'])
        this.marca = paramentros['marca'];
      } else {
        this.marca = "";
        this.getCubos()
      }
    });

  }

  getCubos(){

    this._service.getCubos().subscribe(response => {
      this.cubos = response;
      this.loading = false;
    })

  }

  getCubosMarca(marca: string){

    this._service.getCubosMarca(marca).subscribe(response => {
      this.cubos = response;
      this.loading = false;
    })

  }

}
