import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';

import { TEMPLATES_ROUTES_SEARCHBARITEMS } from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ONavbarModule, OFooterComponent],
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
}
