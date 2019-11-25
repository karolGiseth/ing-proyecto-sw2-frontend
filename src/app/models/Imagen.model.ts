import { Usuario } from './Usuario.model';

export class Imagen{
    id : number;
	url: string;
    categoria: string;
    titulo : string;
    descripcion : string;
    usuario: Usuario = new Usuario(); 
}