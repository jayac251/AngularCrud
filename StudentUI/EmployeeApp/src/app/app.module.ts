import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import RouterModule
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService} from './studentmgmt/service/student.service';
import { AddmodifystudComponent } from './studentmgmt/addmodifystud/addmodifystud/addmodifystud.component';
import { ApproverejectstudComponent } from './studentmgmt/approverejectstud/approverejectstud/approverejectstud.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'AddModify', component: AddmodifystudComponent },
  { path: 'ApproveReject', component: ApproverejectstudComponent  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddmodifystudComponent,
    ApproverejectstudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
