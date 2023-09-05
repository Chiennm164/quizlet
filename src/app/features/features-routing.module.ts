import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FeaturesComponent} from "./features.component";

const routes: Routes = [{
  path: "",
  component: FeaturesComponent,
  children: [
    {
      path: "",
      redirectTo: "dashdoard",
      pathMatch: "full"
    },
    {
      path: "dashdoard",
      loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
    }

  ]

}

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
