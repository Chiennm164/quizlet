import {Component, OnInit} from '@angular/core';
import {TYPE_BUTTON} from "../../../../core/constants";
import {Question} from "../../../../core/models/question";
import * as _ from 'lodash';
import {PageHtmlServices} from "../../services/page-html.services";

@Component({
  selector: 'app-quiz-html',
  templateUrl: './quiz-html.component.html',
  styleUrls: ['./quiz-html.component.scss']
})
export class QuizHtmlComponent implements OnInit {

  _data: Question = {}
  listQuestion: Question[] = []

  constructor(public pageHtmlServices: PageHtmlServices) {
  }

  ngOnInit(): void {
    this.getListQuestion();
  }

  getListQuestion() {
    this.pageHtmlServices.getListQuestionHtml().subscribe({
      next: data => {
        this.listQuestion = [...data];
        if (this.listQuestion.length) {
          this.listQuestion = this.listQuestion.map((ls: any, idx) => {
            ls.answer = _.shuffle(ls.answer)
            return {
              ds: TYPE_BUTTON.Empty,
              stt: idx + 1,
              answerSelected: [],
              ...ls
            }
          })
          this._data = this.listQuestion[0];
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handlerBtnPrevious(idx: number) {
    if (this.listQuestion[idx - 1]?.answerSelected?.length! > 0) {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Selected
    } else {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Empty
    }
    this._data = this.listQuestion[idx-2]
  }

  handlerBtnNext(idx: number) {
    if (this.listQuestion[idx - 1]?.answerSelected?.length! > 0) {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Selected
    } else {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Empty
    }
    this._data = this.listQuestion[idx]
  }

  handlerBtnSubmit() {
    // this.pageHtmlServices.checkanwser().subscribe(
    //   {
    //     next: result => {
    //     }
    //   }
    // )
  }

  dataSend(event: any) {
    this.listQuestion.forEach((ls: any) => {
      if (ls.id === event.id) {
        ls.answerSelected = event.answer;
      }
    })
  }

  navigateQuestion(idx: number) {
    if (this.listQuestion[this._data.stt!-1]?.answerSelected?.length! > 0) {
      this.listQuestion[this._data.stt!-1].ds = TYPE_BUTTON.Selected
    } else {
      this.listQuestion[this._data.stt!-1].ds = TYPE_BUTTON.Empty
    }
    this._data = this.listQuestion[idx-1]
  }

  checkResult(result: string) {
    if (result === TYPE_BUTTON.Missing) {
      return 'btn-answer-missing'
    }
    if (result === TYPE_BUTTON.False) {
      return 'btn-answer-false'
    }
    if (result === TYPE_BUTTON.True) {
      return 'btn-answer-true'
    }
    if (result === TYPE_BUTTON.Empty) {
      return 'btn-empty'
    }
    if (result === TYPE_BUTTON.CurrentSelect) {
      return 'btn-current-select'
    }
    if (result === TYPE_BUTTON.Selected) {
      return 'btn-selected'
    }
    return ''
  }
}
