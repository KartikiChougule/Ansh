import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AddEditEmployee } from './addEdit.component';

const appRoutes: Routes = [
	{ path: 'employees', component: AppComponent },
	{ path: 'employees/add', component: AddEditEmployee },
	{ path: 'employees/:id/edit', component: AddEditEmployee },
];

@NgModule ({
   imports: [ BrowserModule,HttpModule
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }