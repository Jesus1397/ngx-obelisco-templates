import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  CeoInstitutionalData,
  ContactInstitutionalData,
  MapInstitutionalData,
  SocialMediaInstitutionalData,
} from '../models/institutional-block.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OMapModule } from '@gcba/ngx-obelisco/map';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { getSocialMediaIcon, formatTitleNetwork } from 'src/app/constants/functions.constants';
@Component({
  selector: 'institutional-block',
  templateUrl: './institutional-block.component.html',
  styleUrls: ['./institutional-block.component.scss'],
  standalone: true,
  imports: [CommonModule, OMapModule, OButtonComponent, OAccessModule],
})
export class InstitutionalBlockComponent implements OnInit {
  @Input() ceo?: CeoInstitutionalData;
  @Input() contact?: ContactInstitutionalData;
  @Input() socialMedia?: SocialMediaInstitutionalData[];
  @Input() map?: MapInstitutionalData;

  public getIcon = getSocialMediaIcon;

  public formatTitle = formatTitleNetwork;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizedMapUrl: SafeResourceUrl = '';

  ngOnInit(): void {}
}
