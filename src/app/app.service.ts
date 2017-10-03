import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  public getWeatherByCity(cityName): Observable<any> {

    const url = `/api/weather`

    return this.http.post(url, {city: cityName})
               .map((res: Response) => {
                 return res.json().weather
               })
  }
}
