import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '@services/info-pagina.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor( public infoService: InfoPaginaService){

  }
}
