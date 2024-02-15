import { Component, OnInit } from '@angular/core';
import { DropdownNavigationItem } from '@gcba/ngx-obelisco/core/models';

import {
  TEMPLATES_ROUTES,
  TEMPLATES_ROUTES_SEARCHBARITEMS,
} from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-section-templates',
  templateUrl: './section-templates.component.html',
  styleUrls: ['./section-templates.component.scss'],
})
export class SectionTemplatesComponent {
  public routes = TEMPLATES_ROUTES;
  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

 
}
