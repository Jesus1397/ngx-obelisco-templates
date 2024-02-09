import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTemplatesRoutingModule } from './section-templates-routing.module';
import { SectionTemplatesComponent } from './section-templates.component';
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OCardModule } from '@gcba/ngx-obelisco/card';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { ODropdownModule } from '@gcba/ngx-obelisco/dropdown';
import { ONavModule } from '@gcba/ngx-obelisco/nav';

@NgModule({
  declarations: [SectionTemplatesComponent],
  imports: [
    CommonModule,
    SectionTemplatesRoutingModule,
    OAccessModule,
    ONavbarModule,
    OCardModule,
    PageHeaderComponent,
    ONavModule,
    ODropdownModule 
  ],
})
export class SectionTemplatesModule {}
