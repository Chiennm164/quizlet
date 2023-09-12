import {Injectable} from "@angular/core";
import "../../../data/question-html.json";
import *  as dataPageHtml from '../../../data/question-html.json';
import {of} from "rxjs";
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})

export class PageHtmlServices {
  data = dataPageHtml

  constructor() {
  }


  public getListQuestionHtml() {
    return of(_.shuffle(this.data.question))
  }

  public  checkanwser(){
    return of(this.data.answer);
  }

}
