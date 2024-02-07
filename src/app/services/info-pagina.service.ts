import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root',
  useClass: HttpClient,
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false;
  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')//src\assets\data\data-pagina.json
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    }); 
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-4ff11-default-rtdb.firebaseio.com/.json')
      .subscribe(
        (resp: any) => {
          this.equipo = resp.equipo;
          //console.log(this.equipo);
        });
  }
}
