import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

import {RouterModule,Routes} from '@angular/router';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'countries/:regionId',component:CountriesComponent},
      {path:'countries/currency/:currencyId',component:CountriesComponent},
      {path:'countries/lang/:languageId',component:CountriesComponent},
      {path:'country/:countryId',component:CountryComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
      
    ]),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
