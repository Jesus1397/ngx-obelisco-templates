import { Component } from '@angular/core';
import {
  TEMPLATES_ROUTES,
  TEMPLATES_ROUTES_SEARCHBARITEMS,
} from './constants/navbar.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public routes = TEMPLATES_ROUTES;
  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;
}
