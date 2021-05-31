import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import {NotificationComponent} from './home/notification/notification.component';
import {NotificationOverviewComponent} from './home/notification/notification-overview/notification-overview.component'
import {LoginComponent} from './login/login.component';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import {PredmetiComponent} from './predmeti/predmeti.component'
import {PredmetiGridComponent} from './predmeti/predmeti-grid/predmeti-grid.component';
import {PredmetiNavComponent} from './predmeti/predmeti-nav/predmeti-nav.component';
import {IspitiComponent} from './ispiti/ispiti.component'
import {DokumentiComponent} from './dokumenti/dokumenti.component'
import {DokumentiFormComponent} from './dokumenti/dokumenti-form/dokumenti-form.component'
import {DokumentiOverviewComponent} from './dokumenti/dokumenti-overview/dokumenti-overview.component'
import {ProfilComponent} from './profil/profil.component'
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotificationComponent,
    NotificationOverviewComponent,
    LoginComponent,
    PredmetiComponent,
    PredmetiGridComponent,
    PredmetiNavComponent,
    IspitiComponent,
    DokumentiComponent,
    DokumentiFormComponent,
    DokumentiOverviewComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
