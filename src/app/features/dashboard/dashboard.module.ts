import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {pages} from "./pages";
import {components} from "./components";
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ...pages, ...components],
    imports: [
        CommonModule, DashboardRoutingModule, FormsModule
    ]
})
export class DashboardModule {
}
