import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  public getWeatherByCity(cityName): Observable<any> {

    const url = `/api_weather/weather`

    return this.http.post(url, {city: cityName})
               .map((res: Response) => {
                 return res.json().weather
               })
  }

  public getWeatherPollutionByCity(weatherData, datePollution): Observable<any> {

    const url = `/api_pollution/weather`

    return this.http.post(url, {data: weatherData, date: datePollution})
               .map((res: Response) => {
                 return res.json().weather
               })
  }
}
