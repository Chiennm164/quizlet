import {Component , Injector} from "@angular/core";
import {FormBuilder} from "@angular/forms";
@Component({
  template :`<ng-content></ng-content>`
})
export class BaseComponent {

// protected fb! : FormBuilder
  constructor(public injector :Injector) {
     // this.fb = this.injector.get(FormBuilder)
  }
}
