import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizHtmlComponent} from "./pages/quiz-html/quiz-html.component";
import {QuizAngular2Component} from "./pages/quiz-angular2/quiz-angular2.component";
import {QuizVuejsComponent} from "./pages/quiz-vuejs/quiz-vuejs.component";
import {QuizReactjsComponent} from "./pages/quiz-reactjs/quiz-reactjs.component";
import {QuizCssComponent} from "./pages/quiz-css/quiz-css.component";
import {QuizVanillajsComponent} from "./pages/quiz-vanillajs/quiz-vanillajs.component";

const routes: Routes = [{
  path: "",
  redirectTo: "q-html",
  pathMatch: "full"
}, {
  path: "q-html",
  component: QuizHtmlComponent
},
  {
    path: "q-css",
    component: QuizCssComponent
  },
  {
    path: "q-vanilla",
    component: QuizVanillajsComponent
  },
  {
    path: "q-react",
    component: QuizReactjsComponent
  },
  {
    path: "q-vue",
    component: QuizVuejsComponent
  },
  {
    path: "q-angular",
    component: QuizAngular2Component
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
