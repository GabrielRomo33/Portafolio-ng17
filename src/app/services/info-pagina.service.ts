import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root',
  useClass: HttpClient,
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  constructor(private http: HttpClient) { 
    // console.log('Chatiment de la Rose');
    // Leer Json
    this.http.get('assets/data/data-pagina.json')//src\assets\data\data-pagina.json
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }
}
