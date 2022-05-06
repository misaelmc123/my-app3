import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { AppProductAlertsComponent } from './app-product-alerts/app-product-alerts.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AppTopBarComponent,
    AppProductListComponent,
    AppProductAlertsComponent,
  ],
  bootstrap: [
    AppComponent,
    AppTopBarComponent,
    AppProductListComponent,
    AppProductAlertsComponent,
  ],
})
export class AppModule {}
