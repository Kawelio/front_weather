import 'rxjs/add/operator/map'

import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AppService {

	constructor(private http: Http) { }

	public getWeatherByCity(cityName): Observable<any> {
		const url = `/api_pollution/weather`

		return this.http.post(url, { city: cityName })
			.map((res: Response) => {
				return res.json().weather
			})
	}

	public sendBicycleTheftAlert(cityName, bTime, bDate): Observable<any> {
		const url = `/api/bicycle/alert`

		return this.http.post(url, {
			city: cityName,
			time: bTime,
			date: bDate
		})
			.map((res: Response) => {
				return res.json()
			})
	}
}
