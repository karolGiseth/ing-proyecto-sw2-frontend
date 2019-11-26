import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as proxy from '../../../proxy.config.json';

import { RequestService } from './request.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepositoryService {

  constructor(private req: RequestService) { }

  public getImagenes() {
    return this.req.get(`imagen-api/find-all`);
  }

  public getImagenesEnviadas(ID) {
    return this.req.get(`imagen-api/send-image`, { queryParams: { id: ID } });
  }

  public enviar(imagen) {
    return this.req.post(`imagen-api/create/`, { data: imagen });
  }

  public actualizar(imagen) {
    return this.req.put(`imagen-api/update`, { data: imagen });
  }
}
