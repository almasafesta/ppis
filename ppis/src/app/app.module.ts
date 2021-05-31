import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './pages/home/home.component';
import { AppComponent } from './app.component';
import {NotificationComponent} from './pages/home/notification/notification.component';
import {NotificationOverviewComponent} from './pages/home/notification/notification-overview/notification-overview.component'
import {LoginComponent} from './pages/login/login.component';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import {PredmetiComponent} from './pages/predmeti/predmeti.component'
import {PredmetiGridComponent} from './pages/predmeti/predmeti-grid/predmeti-grid.component';
import {PredmetiNavComponent} from './pages/predmeti/predmeti-nav/predmeti-nav.component';
import {IspitiComponent} from './pages/ispiti/ispiti.component'
import {DokumentiComponent} from './pages/dokumenti/dokumenti.component'
import {DokumentiFormComponent} from './pages/dokumenti/dokumenti-form/dokumenti-form.component'
import {DokumentiOverviewComponent} from './pages/dokumenti/dokumenti-overview/dokumenti-overview.component'
import {ProfilComponent} from './pages/profil/profil.component'
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
