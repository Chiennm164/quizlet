import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./shared/layouts/not-found/not-found.component";
import {FeaturesComponent} from "./features/features.component";
const routes: Routes = [
  {
    path: "",
    component:FeaturesComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
