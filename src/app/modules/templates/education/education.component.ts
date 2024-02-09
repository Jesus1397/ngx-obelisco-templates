import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';
import { ODropdownModule } from '@gcba/ngx-obelisco/dropdown';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { DropdownNavigationItem } from '@gcba/ngx-obelisco/core/models';

import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component';

import { TEMPLATES_ROUTES_SEARCHBARITEMS } from 'src/app/constants/navbar.constants';
import { MapInstitutionalData } from 'src/app/components/models/institutional-block.models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    ONavbarModule,
    OFooterComponent,
    PageHeaderComponent,
    ODropdownModule,
    ONavModule,
    InstitutionalBlockComponent,
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public routes = [
    {
      title: 'Templates',
      route: '/templates',
    },
  ];

  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

  public institutionalDropdownItems: DropdownNavigationItem[] = [
    {
      text: 'Ministerio de Educación',
      link: '#',
    },
    {
      text: 'Subsecretaría de Carrera Docente',
      link: '#',
    },
    {
      text: 'Subsecretaría de Coordinación Pedagógica y Equidad Educativa',
      link: '#',
    },
    {
      text: 'Subsecretaría de Tecnología Educativa y Sustentabilidad',
      link: '#',
    },
    {
      text: 'Subsecretaría Agencia de aprendizaje a lo largo de la vida',
      link: '#',
    },
    {
      text: 'Subsecretaría de Gestión Económico Financiera y Administración de Recursos',
      link: '#',
    },
    {
      text: 'Unidad de Evaluación Integral de la Calidad y Equidad Educativa',
      link: '#',
    },
    {
      text: 'Unidad de Coordinación del Sistema de Formación Docente',
      link: '#',
    },
    {
      text: 'Organigrama',
      link: '#',
    },
    {
      text: 'Guía de funcionarios',
      link: '#',
    },
  ];

  public transparencyDropdownItems: DropdownNavigationItem[] = [
    {
      text: 'Declaraciones juradas',
      link: '#',
    },
    {
      text: 'Trámites y servicios',
      link: '#',
    },
    {
      text: 'Compras y contrataciones de obra pública',
      link: '#',
    },
  ];

  public navJournal = [
    {
      title: 'Agenda educativa 2023',
      route: '#',
    },
  ];

  public educationMap: MapInstitutionalData = {
    address: 'Dirección: Carlos H. Perette 750.',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.888755725674!2d-58.38227022454956!3d-34.581681272962264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1fa6732c4b%3A0xe0081a9aaee2c67b!2sMinisterio%20de%20Educaci%C3%B3n%20de%20la%20Ciudad%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1686840819485!5m2!1ses!2sar',
    srcButton:
      'https://mapa.buenosaires.gob.ar/informacion/?lat=-34.581573&amp;lng=-58.380459&amp;zl=15&amp;modo=transporte&amp;dir=Ministerio+de+Educaci%C3%B3n+GCBA+(CABA%2C+CABA)&amp;ilat=-34.581573&amp;ilng=-58.380459&amp;fid=sitios_de_interes%7C2533',
  };
}
