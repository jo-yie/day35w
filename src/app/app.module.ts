import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { WeatherDetailComponent } from './component/weather-detail/weather-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './module/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
