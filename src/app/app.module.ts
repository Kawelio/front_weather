import 'hammerjs'

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MATERIAL_COMPATIBILITY_MODE, MatIconRegistry } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		SharedModule
	],
	providers: [
		MatIconRegistry,
		{
			provide: MATERIAL_COMPATIBILITY_MODE,
			useValue: true
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
