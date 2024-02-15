import { NavbarRoute, SearchbarItem } from '@gcba/ngx-obelisco/core/models';

export const TEMPLATES_ROUTES: NavbarRoute[] = [
  {
    title: 'Templates',
    route: 'templates',
  },
  {
    title: 'Documentación',
    route: 'doc',
  },
];

export const TEMPLATES_ROUTES_SEARCHBARITEMS: SearchbarItem[] = [
  {
    title: 'Inicio',
    route: '/',
  },
  {
    title: 'Templates',
    route: 'templates',
  },
  {
    title: 'Cultura',
    route: 'templates/culture',
  },
  {
    title: 'Educación',
    route: 'templates/education',
  },
  {
    title: 'Trámites',
    route: 'templates/procedure',
  },
];
