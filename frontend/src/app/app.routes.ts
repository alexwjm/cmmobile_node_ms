import {Routes} from "@angular/router";
import {LoginComponent} from "./user/login";




export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: 'full'
  },
  {
    path: "list",
    component: LoginComponent
  }
];
