import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from 'src/app/models/perfilusuario';
import { PerfilUsuarioService } from 'src/app/services/perfilusuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaemail") cajaEmail!: ElementRef;
  @ViewChild("cajapass") cajaPass!: ElementRef;

  constructor(private _service: PerfilUsuarioService, private _router: Router) { }

  ngOnInit(): void {

  }

  registro(){

    var user = new PerfilUsuario(0, this.cajaNombre.nativeElement.value, this.cajaEmail.nativeElement.value, this.cajaPass.nativeElement.value)
    this._service.registro(user).subscribe(response => {
      this._router.navigateByUrl("/")
    })

  }

}
