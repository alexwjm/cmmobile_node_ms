import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";


import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./user/login";
import {MenuComponent} from "./menu";
import {MenuItem} from "./menu";
import {Header} from "./shared/header";
import {Footer} from "./shared/footer";
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MenuItem,
    Header,
    Footer
  ],
  imports     : [CarouselModule.forRoot(),ButtonsModule.forRoot(),AlertModule.forRoot(),BrowserModule,RouterModule.forRoot(rootRouterConfig)],
  bootstrap   : [AppComponent]
})
export class AppModule {

}