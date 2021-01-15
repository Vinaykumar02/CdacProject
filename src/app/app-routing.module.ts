import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {AdoptionComponent} from './adoption/adoption.component'
import {UserAddressComponent} from './user-address/user-address.component'

const routes: Routes = [
  {
  path : 'login',
  component : LoginComponent
},
{
  path : 'adoption',
  component : AdoptionComponent
},
{
  path : 'address',
  component : UserAddressComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
