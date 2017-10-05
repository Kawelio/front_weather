import { Component, OnDestroy, OnInit } from '@angular/core'
import { AppService } from 'app/app.service'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/takeUntil'
import { Subject } from 'rxjs/Subject'

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // HTML variables
  // Weather
  public city                          = ''
  public weatherCity                   = null
  public weatherPollution              = null
  // Bicycle alert
  public listTheftBicycle              = ''
  public bicycleCity                   = ''
  public theftDate                     = ''
  public time                          = ''
  public date                          = ''
  public error
// Component variables
  private ngUnsubscribe: Subject<void> = new Subject<void>()

  constructor(private appService: AppService) {

  }

  public ngOnInit() {

    this.refreshTheft()
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

  public sendBicycleTheftAlert() {
    this.appService.sendBicycleTheftAlert(this.bicycleCity, this.time, this.theftDate)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((data) => {
          console.log(data)
          this.refreshTheft()
        })
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }

  private refreshTheft() {
    this.appService.getBicycleTheftAlert()
        .subscribe((bicycles) => {
          this.listTheftBicycle = bicycles
        })
  }
}
