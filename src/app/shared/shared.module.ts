import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {layouts} from "./layouts";
import {components} from "./components";
const  COMPONENTS =[...layouts,...components]
// const MODULES = []

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports :[
    ...COMPONENTS
  ]
})
export class SharedModule {
  static forRoot():ModuleWithProviders<SharedModule>{
    return {
      ngModule:SharedModule,
      providers:[]
    }
  }

}
