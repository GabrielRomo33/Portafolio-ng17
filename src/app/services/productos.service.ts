import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propducto } from '../interfaces/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Propducto[] = [];
  productosFiltrados: Propducto[] = [];

  constructor(private http: HttpClient) { 
    this.CargarProducrtos();
  }


  private CargarProducrtos (){

    return new Promise<void> ( (resolve, reject ) => {
      this.http.get('https://angular-html-4ff11-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) =>{
        this.productos = resp;
        // setTimeout(() => {
          this.cargando = false;
          resolve();
        // }, 2000);
      });
    });
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-4ff11-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino: string){
    if( this.productos.length === 0){
      this.CargarProducrtos().then( () => {
        this.filtrarProductos( termino );
      })
    }else{
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos(termino: string) {
    console.log(this.productos)

    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0){
        this.productosFiltrados.push( prod );
      }
    })
  }
}
