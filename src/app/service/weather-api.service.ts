import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "https://api.openweathermap.org/data/2.5/weather"
  private APIKey = "640e8bae656105ec84a951517121a4fb" // day 34
  // private APIKey = "baf8bde025ff8bc3fcf3c3a7203cf1dc" // day 35 
  private units = "metric"

  getWeatherFromApi(cityName: string): Observable<any> {

    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', this.APIKey)
      .set('units', this.units)

    console.log(this.baseUrl, {params})

    return this.httpClient.get<any>(this.baseUrl, {params})

  }

}
