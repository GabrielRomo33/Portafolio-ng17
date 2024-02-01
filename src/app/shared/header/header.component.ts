import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPaginaService } from '@services/info-pagina.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
   InfoPaginaService: InfoPaginaService = inject(InfoPaginaService);
  // constructor(public infoPaginaService: InfoPaginaService) { }
}
