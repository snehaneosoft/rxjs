import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchmapdemoComponent } from './switchmapdemo/switchmapdemo.component';
import { ForkjoindemoComponent } from './forkjoindemo/forkjoindemo.component';
import { TapdemoComponent } from './tapdemo/tapdemo.component';
import { MergeComponent } from './merge/merge.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { Comp1Component } from './comp1/comp1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'switchmap',
    title:'switchmap',
    component:SwitchmapdemoComponent
  },
  {
    path:'forkjoin',
    title:'forkjoin',
    component:ForkjoindemoComponent
  },
  {
    path:'tap',
    title:'tap',
    component:TapdemoComponent
  },
  {
    path:'merge',
    title:'merge',
    component:MergeComponent
  },
  {
    path:'map',
    title:'map',
    component:MapComponent
  },
  {
    path:'filter',
    title:'filter',
    component:FilterComponent
  },
  {
    path:'take',
    title:'take',
    component:TakeComponent
  },
  {
    path:'subject',
    title:'suject',
    component:Comp1Component
  },
  {
    path:'dashboard',
    title:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
