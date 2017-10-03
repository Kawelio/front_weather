import 'rxjs/add/operator/filter'

import { Component, ViewEncapsulation } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private translate: TranslateService, private router: Router) {
		if (translate.getBrowserLang() === 'fr') {
			translate.setDefaultLang('fr')
			translate.use('fr')
		} else {
			translate.setDefaultLang('en')
			translate.use('en')
		}

		this.router.events.filter((event) => event instanceof NavigationEnd)
			.subscribe((e: NavigationEnd) => {
				document.body.scrollTop = 0
			})
	}
}
