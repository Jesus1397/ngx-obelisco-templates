import { Component } from '@angular/core';
import { DropdownNavigationItem } from '@gcba/ngx-obelisco/core/models';
import {
  TEMPLATES_ROUTES,
  TEMPLATES_ROUTES_SEARCHBARITEMS,
} from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
  public routes = TEMPLATES_ROUTES;
  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

  //Page Header example
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

  public pageHeaderExample = `<page-header
  title="Educación"
  description="Nos ocupamos de crear, promover y ejecutar políticas educativas en
sus niveles inicial, primario, secundario y superior, que conformen un sistema educativo innovador, único e integrado."
  [badges]="[
    { text: 'Etiqueta 1' },
    {
      text: 'Etiqueta 2',
      type: 'secondary',
      url: 'https://www.google.com/'
    }
  ]"
  headline="Jueves 17 de junio de 2022"
  [socialMedia]="true"
>
  <div class="mb-2 mb-md-3 mr-3">
    <o-dropdown-navigation
      dataTarget="education-institutional-dropdown"
      [dropNavItems]="institutionalDropdownItems"
      iconRight="expand_more"
      title="Institucional"
      [isAnimatedIconRight]="true"
    ></o-dropdown-navigation>
  </div>
  <div class="mb-2 mb-md-3 mr-3">
    <o-nav-horizontal
      [navHorItems]="navJournal"
      size="lg"
      [isBordered]="true"
    ></o-nav-horizontal>
  </div>
  <div class="mb-0 mb-md-3">
    <o-dropdown-navigation
      dataTarget="education-transparency-dropdown"
      [dropNavItems]="transparencyDropdownItems"
      iconRight="expand_more"
      title="Transparencia activa"
      [isAnimatedIconRight]="true"
    ></o-dropdown-navigation>
  </div>
</page-header>
  `;
}
