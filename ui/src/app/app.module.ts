//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

//external modules

//components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';

//services

//pipes

//routes (always last)
import { Routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatToolbarModule,
        //always last
        RouterModule.forRoot(Routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }