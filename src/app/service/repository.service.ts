import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import * as proxy from '../../../proxy.config.json';

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

  public findByRoomCode(code) {
    return this.req.get(`/artwork-api/findByRoomCode/`, { queryParams: { code: code } });
  }

  public findSalesByRoomCode(code) {
    return this.req.get(`/artworksaled-api/findAllByNumberRoom/`, { queryParams: { number_room: code } });
  }

  public delete(endpoint, artwork) {
    return this.req.delete(`/`+endpoint+`/delete/`, { queryParams: {inscription_code: artwork.inscription_code} });
  }


  public enviar(imagen) {
    return this.req.post(`/imagen-api/create/`, { data: imagen });
  }

  public actualizar(imagen) {
    return this.req.put(`/imagen-api/update`, { data: imagen });
  }
}
