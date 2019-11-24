import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { AnnotatorComponent } from './components/annotator/annotator.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { RepositoryService } from './service/repository.service';
import { RequestService } from './service/request.service';
import { BackLoginComponent } from './components/back-login/back-login.component';

const routes: Routes = [
  { path: 'session', component: BackLoginComponent },
      {
        path: 'annotator',
        component: AnnotatorComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnnotatorComponent,
    CustomerComponent,
    BackLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, RepositoryService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
