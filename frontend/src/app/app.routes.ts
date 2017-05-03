import {Routes} from "@angular/router";
import {LoginComponent} from "./user/login";
import {MenuComponent} from "./menu";




export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
  	path: "menu",
  	component: MenuComponent
  }
];
