import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OBreadcrumbComponent } from '@gcba/ngx-obelisco/breadcrumb';
import { BreadcrumbService } from '@gcba/ngx-obelisco/core/services';
import { BreadcrumbRoute } from '@gcba/ngx-obelisco/core/models';
import { Badge, SocialMediaHeaderData } from '../models/page-header.models';
import { getSocialMediaIcon, formatTitleNetwork } from 'src/app/constants/functions.constants';

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
  @Input() socialMedia?: SocialMediaHeaderData[];
  
  public getIcon = getSocialMediaIcon;

  public formatTitle = formatTitleNetwork;
  
  constructor() {}

  ngOnInit(): void {
    this.badges = this.badges || [];

    this.badges.forEach((badge) => {
      badge.type = badge.type || 'info';
      badge.url = badge.url || '#';
    });
  }
}
