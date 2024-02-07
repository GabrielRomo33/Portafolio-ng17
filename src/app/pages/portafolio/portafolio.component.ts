import { Component } from '@angular/core';
import { ProductosService } from '@services/productos.service';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  constructor( public productosService:  ProductosService ){ }
}
