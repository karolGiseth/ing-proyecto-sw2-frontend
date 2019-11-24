import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-login',
  templateUrl: './back-login.component.html',
  styleUrls: ['./back-login.component.css']
})
export class BackLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
  }
  openLogin(){
    //this.router.navigate(['sesion']);
    }
}
