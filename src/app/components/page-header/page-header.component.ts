import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OBreadcrumbComponent } from '@gcba/ngx-obelisco/breadcrumb';
import { BreadcrumbService } from '@gcba/ngx-obelisco/core/services';
import { BreadcrumbRoute } from '@gcba/ngx-obelisco/core/models';
import { Badge } from '../models/page-header.models';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  standalone: true,
  imports: [OBreadcrumbComponent, CommonModule],
})
export class PageHeaderComponent implements OnInit {
  @Input() breadcrumbData?: BreadcrumbRoute[];
  @Input() title?: string;
  @Input() description?: string;
  @Input() badges?: Badge[];
  @Input() headline?: string;
  @Input() socialMedia?: boolean;

  constructor() {}

  ngOnInit(): void {
    this.badges = this.badges || [];

    this.badges.forEach((badge) => {
      badge.type = badge.type || 'info';
      badge.url = badge.url || '#';
    });
  }
}
