import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPaginaService } from '@services/info-pagina.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  anio: number = new Date().getFullYear();
  InfoPaginaService: InfoPaginaService = inject(InfoPaginaService);
  // constructor(public infoPaginaService: InfoPaginaService) { }

}
