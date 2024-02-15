import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTemplatesComponent } from './section-templates.component';

const routes: Routes = [{ path: '', component: SectionTemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionTemplatesRoutingModule {}
