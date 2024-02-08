import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTemplatesRoutingModule } from './section-templates-routing.module';
import { SectionTemplatesComponent } from './section-templates.component';
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OCardModule } from '@gcba/ngx-obelisco/card';

@NgModule({
  declarations: [SectionTemplatesComponent],
  imports: [
    CommonModule,
    SectionTemplatesRoutingModule,
    OAccessModule,
    ONavbarModule,
    OCardModule,
  ],
})
export class SectionTemplatesModule {}
