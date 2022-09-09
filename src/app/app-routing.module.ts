import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './nofound/nofound.component';
import { ShowVisitorComponent } from './show-visitor/show-visitor.component';

const routes: Routes = [
  {path:"show-visitor",component:ShowVisitorComponent, canActivate:[ActivatedRoute]},
  {path:"add-visitor",component:AddVisitorComponent, canActivate:[ActivatedRoute]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
