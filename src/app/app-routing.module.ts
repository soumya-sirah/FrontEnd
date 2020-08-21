import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './master/test/test.component';
import {LoginComponent} from './master/login/login.component';
import {MasterComponent} from './master/master/master.component';
import {GestionOrientationComponent} from "./bd/compenents/Orientation/gestion-orientation/gestion-orientation.component";
import {ListOrientationComponent} from "./bd/compenents/Orientation/list-orientation/list-orientation.component";



const routes: Routes = [


  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: MasterComponent, children: [
      {path: 'test', component: TestComponent},
      {path: 'gestionOrientation', component: GestionOrientationComponent},
      {path: 'listOrientation', component: ListOrientationComponent},
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
