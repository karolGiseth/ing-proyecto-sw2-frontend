
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestService } from '../service/request.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LoginService {

  user: any;
  idloged: number;

  constructor(private req: RequestService) {
    this.idloged=0;
   }

  public getUser(username: string, password: string) {
    this.user=this.req.get(`/sesion-api/login`, { queryParams: { username, password } });
    return this.user;
  }

  setIdloged(id: number){
    this.idloged= id;
  }
  getsellerloged(){
    return this.user;
  }

}
