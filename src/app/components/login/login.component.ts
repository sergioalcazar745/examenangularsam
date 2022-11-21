import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuarioService } from 'src/app/services/perfilusuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(private _service: PerfilUsuarioService, private _router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") != ""){
      this._router.navigateByUrl("/")
    }
  }

  login(){

    this._service.login(this.cajaUsuario.nativeElement.value, this.cajaPassword.nativeElement.value).subscribe(response => {
      localStorage.setItem("token", response.response)
      this._router.navigateByUrl("/")
    });

  }

}
