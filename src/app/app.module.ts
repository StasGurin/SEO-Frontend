import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VisitorsComponent } from './visits/visitors.component';
import { VisitorsStatisticComponent } from './visits/visitors-statistic.component';
import { VisitsComponent } from './visits/visits.component';

import {VisitorStatisticService} from './visits/visitors-statistic.service';
import {VisitorsService} from './visits/visitors.service';
import {VisitsService} from './visits/visits.service';

@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    VisitorsStatisticComponent,
    VisitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VisitorStatisticService, VisitorsService, VisitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
