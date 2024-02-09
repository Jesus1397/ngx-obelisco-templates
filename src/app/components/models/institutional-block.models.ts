import { Media } from '@gcba/ngx-obelisco/core/models';

export interface CeoInstitutionalData {
  title?: string;
  description?: string;
  image?: Media;
}

export interface ContactInstitutionalData {
  phone?: string;
  email?: string;
  address?: string;
}

export interface SocialMediaInstitutionalData {
  title?: string;
  src?: string;
  sizeSm?: boolean;
}

export interface MapInstitutionalData {
  iframe?: string;
  srcButton?: string;
  address?: string;
}