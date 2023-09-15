import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FeaturesComponent} from "./features.component";
import {SharedModule} from "../shared/shared.module";
@NgModule({
  declarations: [
    FeaturesComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class FeaturesModule {
}
