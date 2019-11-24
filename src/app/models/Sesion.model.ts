import { Usuario } from './Usuario.model';

export class Sesion{
    id: number;
    nombreUsuario: string;
    contrasenia: string;
    usuario: Usuario;
}