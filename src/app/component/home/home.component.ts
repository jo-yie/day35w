import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private fb = inject(FormBuilder)
  protected form!: FormGroup

  protected countries: string[] = ["Singapore", "Kuala Lumpur", "Tokyo", "Bangkok", "Hong Kong", "Beijing"]

  ngOnInit():void {

    this.form = this.createForm()

  }

  createForm(): FormGroup {

    return this.fb.group({
      city: this.fb.control<string>("")
    })

  }

  processForm(): void {

    const values = this.form.value
    console.log(">>>Values: ", values)

    const cityName = values.city
    if (!this.countries.includes(cityName)) {
      this.countries.push(values.city)

    }

  }

}
