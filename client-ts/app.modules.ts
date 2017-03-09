import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';


import { LambdaService }           from './components/lambda.service';
import { ListComponents }     from './components/list.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule	],

	declarations: [
		AppComponent,
		ListComponent    ],

    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
		LambdaService
	],

	bootstrap: [AppComponent]
})
export class AppModule {
}