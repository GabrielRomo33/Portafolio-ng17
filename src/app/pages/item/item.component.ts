import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductosService } from '@services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion';
import { Propducto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
// let producto: ProductoDescripcion;
export class ItemComponent implements OnInit{
  
  producto: ProductoDescripcion = {};
  id: string = '';
   constructor( private route:  ActivatedRoute,
                public productoService: ProductosService ){  }

   ngOnInit() {
     this.route.params.subscribe(
      parametros => {
        // console.log(parametros['id']);
        this.productoService.getProducto(parametros['id'])
        .subscribe( producto => {
          this.id = parametros['id'];
          this.producto = producto;
          console.log(producto);
        });
      });
   }
}
