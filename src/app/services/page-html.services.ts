import {Injectable} from "@angular/core";
import "../data/question-html.json";
import *  as dataPageHtml from '../data/question-html.json';
import *  as dataPageCsss from '../data/question-css.json';
import *  as dataPageVanillaJS from '../data/question-vanillajs.json';
import {Observable, of} from "rxjs";
import * as _ from 'lodash'
import {GROUP_ANSWER} from "../core/constants";

@Injectable({
  providedIn: 'root'
})

export class PageHtmlServices {
  dataHTML = dataPageHtml
  dataCSS = dataPageCsss
  dataVanillaJS = dataPageVanillaJS

  constructor() {
  }


  public getListQuestionHtml(group :GROUP_ANSWER): Observable<any> {
    if (group === GROUP_ANSWER.Html){
      return of(_.shuffle(this.dataHTML.question))
    }
    if (group === GROUP_ANSWER.Css){
      return of(_.shuffle(this.dataCSS.question))
    }
    if (group === GROUP_ANSWER.VanillaJs){
      return of(_.shuffle(this.dataVanillaJS.question))
    }
    return of([])
  }

  public getListAnwser(group :GROUP_ANSWER): Observable<any> {
    if (group === GROUP_ANSWER.Html){
      return of(this.dataHTML.answer);
    }
    if (group === GROUP_ANSWER.Css){
      return of(this.dataCSS.answer);
    }
    if (group === GROUP_ANSWER.VanillaJs){
      return of(this.dataVanillaJS.answer);
    }
    return of([]);
  }

}
