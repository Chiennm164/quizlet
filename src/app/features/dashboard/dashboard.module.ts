import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {pages} from "./pages";
import {components} from "./components";
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ...pages, ...components],
  imports: [
    CommonModule, DashboardRoutingModule, SharedModule
  ]
})
export class DashboardModule {
}
