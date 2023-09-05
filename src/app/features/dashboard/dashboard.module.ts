import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {pages} from "./pages";
import {components} from "./components";
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [
    ...pages, ...components],
  imports: [
    CommonModule, DashboardRoutingModule
  ]
})
export class DashboardModule {
}
