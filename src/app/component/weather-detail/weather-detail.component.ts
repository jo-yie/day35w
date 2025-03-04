import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-detail',
  standalone: false,
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.css'
})
export class WeatherDetailComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}
  cityName: any

  ngOnInit(): void { 

    const id = this.route.snapshot.paramMap.get('id')
    console.log(">>>>ID: ", id)

    this.cityName = this.route.snapshot.paramMap.get('id')

  }

}
