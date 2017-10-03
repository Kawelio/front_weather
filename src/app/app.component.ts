import { Component } from '@angular/core'
import { AppService } from 'app/app.service'

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {

  public city             = ''
  public date             = ''
  public weatherCity      = null
  public weatherPollution = null
  public error

  constructor(private appService: AppService) {

  }

  // Weather
  public getWeatherByCity() {

    this.weatherCity = null

    this.appService.getWeatherByCity(this.city)
        .subscribe((data) => {
          console.log(data)
          this.weatherCity = data
        })
  }

  // Pollution
  public getWeatherPollutionByCity() {

    this.weatherCity = null

    if (this.date) {

      this.appService.getWeatherByCity(this.city)
          .subscribe((weatherData) => {
            this.weatherCity = weatherData

            this.appService.getWeatherPollutionByCity(weatherData, this.date)
                .subscribe((data) => {
                  this.weatherPollution = data
                })
          })

    } else {
      this.error = 'Choose a date !'
    }
  }

}
