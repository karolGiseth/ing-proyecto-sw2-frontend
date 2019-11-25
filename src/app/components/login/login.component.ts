import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/Sesion.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sesion: Sesion  = new Sesion();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {

    if (!this.sesion.nombreUsuario || !this.sesion.contrasenia) {
      alert('CAMPOS VACIOS, los campos deben de estar llenos');
    } else {
      this.loginService.getUser(this.sesion.nombreUsuario , this.sesion.contrasenia)
        .then(data => {
          if (data) {
            this.sesion = data;
            console.log('sesion--->', this.sesion);
             sessionStorage.setItem("idUser",this.sesion.usuario.id.toString());
             sessionStorage.setItem("nombre",this.sesion.usuario.nombre);
            if(this.sesion.usuario.tipoUsuario.id===1){
              this.router.navigate(['annotator']);
            }else{
              this.router.navigate(['customer']);
            }
          }
        }, error => {
          if (error.status === 500) {
            alert('usuario y/0 contraseña incorrectos')
          }
        });
    }
  }
}
