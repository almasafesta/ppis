import {HomeComponent} from './home/home.component'
import {Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { PredmetiComponent } from './predmeti/predmeti.component'
import { IspitiComponent } from './ispiti/ispiti.component'
import { DokumentiComponent } from './dokumenti/dokumenti.component'
import { ProfilComponent } from './profil/profil.component'
export const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'predmeti', component:PredmetiComponent},
    {path:'ispiti', component:IspitiComponent},
    {path:'dokumenti', component:DokumentiComponent},
    {path:'profil', component:ProfilComponent}
]