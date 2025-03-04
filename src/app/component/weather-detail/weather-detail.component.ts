import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WeatherApiService } from '../../service/weather-api.service';

@Component({
  selector: 'app-weather-detail',
  standalone: false,
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.css'
})
export class WeatherDetailComponent {

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private weatherApiService: WeatherApiService) {}

  cityName: any
  fromApi: any
  errorMessage: any

  ngOnInit(): void { 

    this.route.paramMap.subscribe(params => {
      this.cityName = params.get('id')
      this.fetchWeather(this.cityName)
    })

    // const id = this.route.snapshot.paramMap.get('id')
    // console.log(">>>>ID: ", id)

    // this.cityName = this.route.snapshot.paramMap.get('id')?.toString()

    // this.weatherApiService.getWeatherFromApi(this.cityName).subscribe({
    //   next: (data) => {
    //     this.fromApi = data
    //   },
    //   error: (err) => {
    //     console.error(">>>Error: ", err)
    //   }
    // })

  }

  private fetchWeather(city: string): void { 

    this.weatherApiService.getWeatherFromApi(city).subscribe({
      next: (data) => {
        this.fromApi = data
      }, 
      error: (err) => {
        console.error(">>>Error: ", err)
        this.errorMessage = err.message
      }
    })

  }

}
