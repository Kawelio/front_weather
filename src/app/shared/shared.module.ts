import { A11yModule } from '@angular/cdk/a11y'
import { BidiModule } from '@angular/cdk/bidi'
import { ObserversModule } from '@angular/cdk/observers'
import { OverlayModule } from '@angular/cdk/overlay'
import { PlatformModule } from '@angular/cdk/platform'
import { PortalModule } from '@angular/cdk/portal'
import { CdkTableModule } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatSliderModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	StyleModule,
} from '@angular/material'
import { RouterModule } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

const MATERIAL_MODULES = [
	A11yModule,
	BidiModule,
	CdkTableModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatSliderModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	ObserversModule,
	OverlayModule,
	PlatformModule,
	PortalModule,
	StyleModule,
]

@NgModule({
	imports: [
		// Needed for the components declared here
		CommonModule,
		RouterModule,
		TranslateModule,
		MatTabsModule,
	],
	declarations: [
	],
	providers: [
	],
	entryComponents: [
	],
	exports: [
		MATERIAL_MODULES,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		TranslateModule,
	]
})
export class SharedModule { }
