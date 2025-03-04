import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './component/weather-detail/weather-detail.component';

const routes: Routes = [
  { path: 'country/:id', component: WeatherDetailComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
