import {Component , Injector} from "@angular/core";
// import { FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  template :`<ng-content></ng-content>`
})
export class BaseComponent {

  // protected fb!: FormBuilder;
  protected router!: Router;
  protected route!: ActivatedRoute;
  constructor(public injector :Injector) {
    // this.fb = this.injector.get(FormBuilder);
    this.router = this.injector.get(Router);
    this.route = this.injector.get(ActivatedRoute);
  }
}
