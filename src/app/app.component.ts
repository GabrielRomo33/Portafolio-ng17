//import { AppRoutingModule } from './app-routing.module';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, provideRouter } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { InfoPaginaService } from './services/info-pagina.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosService } from '@services/productos.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: 
    [
      CommonModule, 
      RouterOutlet, 
      HeaderComponent, 
      FooterComponent, 
      HttpClientModule,
    ],
    providers: 
    [
      InfoPaginaService,
      ProductosService
    ],
})
export class AppComponent  {
  constructor( public infoPaginaService: InfoPaginaService,
               public productosServie: ProductosService ){  }
  // InfoPaginaService: InfoPaginaService = inject(InfoPaginaService);
}
