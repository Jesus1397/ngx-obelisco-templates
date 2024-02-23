import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';

import { OCardModule } from '@gcba/ngx-obelisco/card';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component' ;
import { ODropdownModule } from '@gcba/ngx-obelisco/dropdown';
import { DropdownNavigationItem } from '@gcba/ngx-obelisco/core/models';
import { BreadcrumbService } from '@gcba/ngx-obelisco/core/services';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component' ;

@Component({
  selector: 'app-goverment-areas',
  standalone: true,
  imports: [
    CommonModule,
    OFooterComponent,
    OCardModule,
    OButtonComponent,
    OAccessModule,
    PageHeaderComponent,
    ODropdownModule,
    InstitutionalBlockComponent
  ],
  templateUrl: './goverment-areas-option-two.component.html',
  styleUrls: ['./goverment-areas-option-two.component.scss']
})
export class GovermentAreasOptionTwoComponent {
  public routes = [
    {
      title: 'Templates',
      route: '/templates',
    },
  ];

  //Inicio de las rutas del Breadcrumb en el Hero de la pagina
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Inicio', route: '/' },
        { name: 'Área de Gobierno', route: '/' },
      ],
      defaultRoute: '/route-default',
    });
  }
  //Fin de las rutas del Breadcrumb en el Hero de la pagina

  //Inicio de Array de dropdown en el Hero de la pagina
  public dropdownItem: DropdownNavigationItem[] = [
    {
      text: "Ministerio de Cultura",
      link: "/"
    },
    {
      text: "Subsecretaría Gestión Cultural",
      link: "/",
    },
    {
      text: "Subsecretaría de Políticas Culturales y Nuevas Audiencias",
      link: "/",
    },
    {
      text: "Ente Autárquico Teatro Colón",
      link: "/"
    },
    {
      text: "Organigrama",
      link: "/",
    },
    {
      text: "Guia de Funcionarios",
      link: "/",
    },
    {
      text: "Contacto",
      link: "/",
    }
  ];
  //Fin de Array de dropdown en el Hero de la pagina
}

