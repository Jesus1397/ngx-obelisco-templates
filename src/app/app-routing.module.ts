import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTemplatesComponent } from './modules/section-templates/section-templates.component';
import { EducationComponent } from './modules/templates/education/education.component';
import { CultureComponent } from './modules/templates/culture/culture.component';
import { ProcedureComponent } from './modules/templates/procedure/procedure.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'templates',
    component: SectionTemplatesComponent,
    loadChildren: () =>
      import('./modules/section-templates/section-templates.module').then(
        (m) => m.SectionTemplatesModule
      ),
  },
  {
    path: 'templates/education',
    component: EducationComponent,
  },
  {
    path: 'templates/culture',
    component: CultureComponent,
  },
  {
    path: 'templates/procedure',
    component: ProcedureComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
