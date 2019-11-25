import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/Imagen.model';
import { RepositoryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-annotator',
  templateUrl: './annotator.component.html',
  styleUrls: ['./annotator.component.css']
})
export class AnnotatorComponent implements OnInit {

  imagenes: Imagen[];
  imagen: Imagen = new Imagen();
  imagenList: Imagen = new Imagen();
  nombre;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.nombre=sessionStorage.getItem("nombre");
    this.findAll();
  }

  findAll() {
    this.repositoryService.getImagenes()
      .then(data => {
        console.log('data: ', data);
        this.imagenes = data;
      });
  }
  anotar(imagen){
    this.imagen=imagen;
  }
  actualizar(imagen){
    if(this.nombre){
      this.repositoryService.actualizar(imagen).then(data =>{
        alert('AUTO ANOTADO');
      }, error =>{
        alert('ACURRIO UN ERROR');
      })
    }else{
      alert('ACURRIO UN ERROR');
    }
  }
}
