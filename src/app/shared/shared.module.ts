import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {layouts} from "./layouts";
import {components} from "./components";
import {FormsModule} from "@angular/forms";
const  COMPONENTS =[...layouts,...components];
const MODULES = [FormsModule]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule ,MODULES
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
