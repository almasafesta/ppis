import {HomeComponent} from './pages/home/home.component'
import {Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { PredmetiComponent } from './pages/predmeti/predmeti.component'
import { IspitiComponent } from './pages/ispiti/ispiti.component'
import { DokumentiComponent } from './pages/dokumenti/dokumenti.component'
import { ProfilComponent } from './pages/profil/profil.component'
export const appRoutes: Routes=[
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'predmeti', component:PredmetiComponent},
    {path: 'ispiti', component:IspitiComponent},
    {path: 'dokumenti', component:DokumentiComponent},
    {path: 'profil', component:ProfilComponent}
]