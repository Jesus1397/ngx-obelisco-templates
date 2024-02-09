import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { ODropdownModule } from '@gcba/ngx-obelisco/dropdown';
import { ONavModule } from '@gcba/ngx-obelisco/nav';
import { DropdownNavigationItem } from '@gcba/ngx-obelisco/core/models';

import { TEMPLATES_ROUTES_SEARCHBARITEMS } from 'src/app/constants/navbar.constants';

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
}
