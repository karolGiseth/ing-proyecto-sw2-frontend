import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/Imagen.model';
import { RepositoryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  imagen: Imagen = new Imagen();
  nombre;
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.nombre=sessionStorage.getItem("nombre");
  }
  enviar(){
    if(this.imagen.url && this.nombre){
      console.log('entra qui');
      this.imagen.usuario.id=parseInt(sessionStorage.getItem('idUser'));
      this.repositoryService.enviar(this.imagen).then(data =>{
        alert('AUTO ENVIADO');
      }, error=>{
        alert('ocurrio un error al enviar');
      })
    }else{
      alert('ingrese una URL');
    }
  }

}
