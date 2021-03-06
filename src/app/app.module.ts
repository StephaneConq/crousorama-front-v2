import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyStocksComponent } from './components/my-stocks/my-stocks.component';
import { MenuComponent } from './bottomsheets/menu/menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProdInterceptor} from './interceptors/prod.interceptor';
import {LocalInterceptor} from './interceptors/local.interceptor';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { PalmaresComponent } from './components/palmares/palmares.component';
import { PalmaresDividendsComponent } from './components/palmares-dividends/palmares-dividends.component';

@NgModule({
  declarations: [
    AppComponent,
    MyStocksComponent,
    MenuComponent,
    SearchComponent,
    SearchBarComponent,
    StockInfoComponent,
    PalmaresComponent,
    PalmaresDividendsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: environment.production ? ProdInterceptor : LocalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
