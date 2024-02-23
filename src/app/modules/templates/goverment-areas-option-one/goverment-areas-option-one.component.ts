import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';

import { OCardModule } from '@gcba/ngx-obelisco/card';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component' ;
import { ODropdownModule } from '@gcba/ngx-obelisco/dropdown';
import { DropdownNavigationItem, Media } from '@gcba/ngx-obelisco/core/models';
import { BreadcrumbService } from '@gcba/ngx-obelisco/core/services';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component' ;
import { OHighlightedModule } from '@gcba/ngx-obelisco/highlighted';

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
    InstitutionalBlockComponent,
    OHighlightedModule
  ],
  templateUrl: './goverment-areas-option-one.component.html',
  styleUrls: ['./goverment-areas-option-one.component.scss']
})
export class GovermentAreasOptionOneComponent {
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
  public dropdownItemsOne: DropdownNavigationItem[] = [
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

  public dropdownItemsTwo: DropdownNavigationItem[] = [
    {
      text: "Escalas salariales",
      link: "/"
    },
    {
      text: "Sueldos de funcionarios",
      link: "/",
    },
    {
      text: "Concurso de personal",
      link: "/",
    },
    {
      text: "Presupuesto abierto",
      link: "/"
    },
    {
      text: "Compras y contrataciones de bienes y servicios",
      link: "/",
    },
    {
      text: "Informes de auditoría",
      link: "/",
    },
    {
      text: "Trámites y servicios",
      link: "/",
    },
    {
      text: "Declaraciones juradas",
      link: "/",
    }
  ];
  //Fin de Array de dropdown en el Hero de la pagina

  //Inicio de los datos de los componentes "Highlighted" en la pagina
  public titleH: string = 'Destacado I';
  public titleHtwo: string = 'Destacado II';

  public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

  public picture: Media = {
    src: 'https://gcba.github.io/obelisco-demo/assets/galeria/galeria-2.png',
    alt: 'descripción de imagen'
  };
  //Fin de los datos de los componentes "Highlighted" en la pagina
}

