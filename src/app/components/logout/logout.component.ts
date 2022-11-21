import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") != null){
      localStorage.setItem("token", "")
    }

    this._router.navigateByUrl("/")
  }

}
