import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  CeoInstitutionalData,
  ContactInstitutionalData,
  MapInstitutionalData,
  SocialMediaInstitutionalData,
} from '../models/institutional-block.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'institutional-block',
  templateUrl: './institutional-block.component.html',
  styleUrls: ['./institutional-block.component.scss'],
  standalone: true,
  imports: [CommonModule],
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

  constructor(private sanitizer: DomSanitizer) {}

  sanitizedMapUrl: SafeResourceUrl = '';

  ngOnInit(): void {
    //Para url de iframe de map
    if (this.map && this.map.iframe) {
      this.sanitizedMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.map.iframe
      );
    }
  }
}
