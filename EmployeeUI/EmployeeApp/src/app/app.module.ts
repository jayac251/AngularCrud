import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import RouterModule
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddmodifyempComponent } from './addmodifyemp/addmodifyemp/addmodifyemp.component';
import { ApproverejectempComponent } from './approverejectemp/approverejectemp/approverejectemp.component';

const appRoutes: Routes = [
  { path: 'AddModify', component: AddmodifyempComponent },
  { path: 'ApproveReject', component: ApproverejectempComponent  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddmodifyempComponent,
    ApproverejectempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
