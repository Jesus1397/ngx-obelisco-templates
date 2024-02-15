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

  getSocialMediaIcon = (title: string): string => {
    const titleLowerCase = title.toLowerCase();
    switch (titleLowerCase) {
      case 'facebook':
        return `bx bxl-${titleLowerCase}-circle`;
      case 'instagram':
        return `bx bxl-${titleLowerCase}-alt`;
      case 'linkedin':
        return `bx bxl-${titleLowerCase}-square`;
      default:
        return `bx bxl-${titleLowerCase}`;
    }
  };

  formatTitleNetwork(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  constructor(private sanitizer: DomSanitizer) {}

  sanitizedMapUrl: SafeResourceUrl = '';

  ngOnInit(): void {}
}
