import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router Module.
import { RouterModule, Routes } from '@angular/router';

//HttpClientModule
import {HttpClientModule} from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Employee Service.
import { EmployeeService } from './employee.service';

//forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//browser page refresh.
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


//PrimenG
import { DataTableModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import {PaginatorModule} from 'primeng/paginator';
import {CalendarModule} from "primeng/primeng";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from "primeng/dialog";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';

import { SearchEmployeesComponent } from './employees/search-employees/search-employees.component';


// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list

// pathMatch property value can be full or prefix. For now we
// will set it to full as we want to do a full match
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'search', component: SearchEmployeesComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    SearchEmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    FormsModule,
    DataTableModule,
    AngularFontAwesomeModule,
    TableModule,
    DataTableModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    PaginatorModule,
    CalendarModule
  ],
  providers: [EmployeeService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
