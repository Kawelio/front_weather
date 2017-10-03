import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/takeUntil'

import { Component, OnDestroy, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { AppService } from 'app/app.service'
import { Subject } from 'rxjs/Subject'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	// HTML variables
	// Weather
	public city = ''
	public weatherCity = null
	// Bicycle alert
	public bicycleCity = ''
	public date = ''
	public time = ''

	// Component variables
	private ngUnsubscribe: Subject<void> = new Subject<void>()

	constructor(private appService: AppService) { }

	public ngOnInit() {
		//
	}

	public ngOnDestroy() {
		this.ngUnsubscribe.next()
		this.ngUnsubscribe.complete()
	}

	public getWeatherByCity() {
		this.weatherCity = null

		this.appService.getWeatherByCity(this.city)
			.takeUntil(this.ngUnsubscribe)
			.subscribe((data) => {
				console.log(data)
				this.weatherCity = data
			})
	}

	public sendBicycleTheftAlert() {
		this.appService.sendBicycleTheftAlert(this.bicycleCity, this.time, this.date)
			.takeUntil(this.ngUnsubscribe)
			.subscribe((data) => {
				console.log(data)
				//  this.any = data
			})
	}
}
