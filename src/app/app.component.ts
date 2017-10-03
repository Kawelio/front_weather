import { Component } from '@angular/core'
import { AppService } from 'app/app.service'

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {

  public city        = ''
  public weatherCity = null

  constructor(private appService: AppService) {

  }

  public getWeatherByCity() {

    this.weatherCity = null

    this.appService.getWeatherByCity(this.city)
        .subscribe((data) => {
          console.log(data)
          this.weatherCity = data
        })
  }

}
