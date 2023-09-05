import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FeaturesComponent} from "./features.component";
import {FeaturesRoutingModule} from "./features-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule,
    NgOptimizedImage
  ]
})
export class FeaturesModule {
}
