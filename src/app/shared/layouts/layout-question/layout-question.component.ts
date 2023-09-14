import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Question} from "../../../core/models/question";
import {PageHtmlServices} from "../../../services/page-html.services";
import * as _ from "lodash";
import {GROUP_ANSWER, TYPE_ANSWER, TYPE_BUTTON} from "../../../core/constants";

@Component({
  selector: 'app-layout-question',
  templateUrl: './layout-question.component.html',
  styleUrls: ['./layout-question.component.scss']
})
export class LayoutQuestionComponent implements OnInit, OnChanges {
  @Input() group: GROUP_ANSWER = GROUP_ANSWER.Html

  _data: Question = {}
  listQuestion: Question[] = []

  constructor(public pageHtmlServices: PageHtmlServices) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getListQuestion();
  }

  getListQuestion() {
    this.pageHtmlServices.getListQuestionHtml(this.group).subscribe({
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

  handlerBtnPrevious(idx: number): void {
    if (this.listQuestion[idx - 1]?.answerSelected?.length! > 0) {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Selected
    } else {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Empty
    }
    this._data = this.listQuestion[idx - 2]
  }

  handlerBtnNext(idx: number): void {
    if (this.listQuestion[idx - 1]?.answerSelected?.length! > 0) {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Selected
    } else {
      this.listQuestion[idx - 1].ds = TYPE_BUTTON.Empty
    }
    if (idx !== this.listQuestion.length) {
      this._data = this.listQuestion[idx]
    } else {
      this.checkAnswer();
    }
  }

  checkAnswer(): void {
    this.pageHtmlServices.checkanwser(this.group).subscribe({
      next: result => {
        result.forEach((for1: any) => {
          this.listQuestion.forEach((for2: Question) => {
            if (for1.id === for2.id) {
              if (for2.answerSelected!.length) {
                // check only
                if (for2.type === TYPE_ANSWER.only) {
                  if (for1.answer[0].id === for2.answerSelected![0].id) {
                    for2.ds = TYPE_BUTTON.True
                  } else {
                    for2.ds = TYPE_BUTTON.False
                  }
                }
                // check many
                if (for2.type === TYPE_ANSWER.many) {
                  const commonItems = for1.answer.filter((item1: any) =>
                    for2.answerSelected!.some((item2: any) => item1.id === item2.id)
                  );
                  if (commonItems.length === for1.answer.length) {
                    for2.ds = TYPE_BUTTON.True
                  } else {
                    for2.ds = TYPE_BUTTON.False
                  }
                }
              } else {
                // đáp an trống
                for2.ds = TYPE_BUTTON.False
              }
            }
          })
        })
      }
    })
  }

  dataSend(event: any): void {
    this.listQuestion.forEach((ls: Question) => {
      if (ls.id === event.id) {
        ls.answerSelected = event.answer;
      }
    })
  }

  navigateQuestion(idx: number): void {
    if (this.listQuestion[this._data.stt! - 1]?.answerSelected?.length! > 0) {
      this.listQuestion[this._data.stt! - 1].ds = TYPE_BUTTON.Selected
    } else {
      this.listQuestion[this._data.stt! - 1].ds = TYPE_BUTTON.Empty
    }
    this._data = this.listQuestion[idx - 1]
  }

  checkResult(result: string): string {
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
