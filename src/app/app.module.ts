import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardcontentComponent } from './cardcontent/cardcontent.component';
import { SwitchmapdemoComponent } from './switchmapdemo/switchmapdemo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForkjoindemoComponent } from './forkjoindemo/forkjoindemo.component';
import { TapdemoComponent } from './tapdemo/tapdemo.component';
import { MergeComponent } from './merge/merge.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    CardcontentComponent,
    SwitchmapdemoComponent,
    ForkjoindemoComponent,
    TapdemoComponent,
    MergeComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    Comp1Component,
    Comp2Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
