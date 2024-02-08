import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { OCardModule } from '@gcba/ngx-obelisco/card';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ONavbarModule,
    HighlightModule,
    OCardModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'assets/styles/stackoverflow-light.css',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
