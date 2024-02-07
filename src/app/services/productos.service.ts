import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propducto } from '../interfaces/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Propducto[] = [];

  constructor(private http: HttpClient) { 
    this.CargarProducrtos();
  }


  private CargarProducrtos (){
    this.http.get('https://angular-html-4ff11-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any) =>{
      console.log(resp);
      this.productos = resp;
      // setTimeout(() => {
        this.cargando = false;
      // }, 2000);
    });
  }
}
