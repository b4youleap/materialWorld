import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Additional Dependencies
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CoreModule.forRoot({userName: 'John Q. Public'}),
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
