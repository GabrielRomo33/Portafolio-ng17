import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '@services/productos.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        // console.log(params['termino']);
        this.productoService.buscarProducto(params['termino']);
      });
  }
}
