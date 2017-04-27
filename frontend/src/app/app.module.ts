import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";


import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./user/login";
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports     : [CarouselModule.forRoot(),ButtonsModule.forRoot(),AlertModule.forRoot(),BrowserModule,RouterModule.forRoot(rootRouterConfig)],
  bootstrap   : [AppComponent]
})
export class AppModule {

}