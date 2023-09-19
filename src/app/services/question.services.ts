import {Injectable} from "@angular/core";
import "../data/question-html.json";
import *  as dataPageHtml from '../data/question-html.json';
import *  as dataPageCss from '../data/question-css.json';
import *  as dataPageVanillaJS from '../data/question-vanillajs.json';
import *  as dataPageBase from '../data/question-baseIT.json';
import *  as dataPageAngular2 from '../data/question-angular.json';
import {Observable, of} from "rxjs";
import * as _ from 'lodash'
import {GROUP_ANSWER} from "../core/constants";

@Injectable({
  providedIn: 'root'
})

export class QuestionServices {
  dataHTML = dataPageHtml
  dataCSS = dataPageCss
  dataVanillaJS = dataPageVanillaJS
  dataBase = dataPageBase
  dataAngular = dataPageAngular2

  constructor() {
  }


  public getListQuestionHtml(group: GROUP_ANSWER): Observable<any> {
    if (group === GROUP_ANSWER.Html) {
      return of(_.shuffle(this.dataHTML.question))
    }
    if (group === GROUP_ANSWER.Css) {
      return of(_.shuffle(this.dataCSS.question))
    }
    if (group === GROUP_ANSWER.VanillaJs) {
      return of(_.shuffle(this.dataVanillaJS.question))
    }
    if (group === GROUP_ANSWER.Basic) {
      return of(_.shuffle(this.dataBase.question))
    }
    if (group === GROUP_ANSWER.Angular) {
      return of(_.shuffle(this.dataAngular.question))
    }
    return of([])
  }

  public getListAnswer(group: GROUP_ANSWER): Observable<any> {
    if (group === GROUP_ANSWER.Html) {
      return of(this.dataHTML.answer);
    }
    if (group === GROUP_ANSWER.Css) {
      return of(this.dataCSS.answer);
    }
    if (group === GROUP_ANSWER.VanillaJs) {
      return of(this.dataVanillaJS.answer);
    }
    if (group === GROUP_ANSWER.Basic) {
      return of(this.dataBase.answer);
    }
    if (group === GROUP_ANSWER.Angular) {
      return of(this.dataAngular.answer);
    }
    return of([]);
  }

}
