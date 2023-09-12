import {Component, OnInit} from '@angular/core';
import {TYPE_RESULT} from "../../../../core/constants";
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
  listAnswer: any = []
  allListAnswer: any = []
  isEndTest: boolean = false

  constructor(public pageHtmlServices: PageHtmlServices) {
  }

  ngOnInit(): void {

    this.pageHtmlServices.getListQuestionHtml().subscribe({
      next: data => {
        this.listQuestion = [...data];
        if (this.listQuestion.length) {
          this.listQuestion = this.listQuestion.map((ls: any, idx) => {
            ls.answer = _.shuffle(ls.answer)
            return {
              ds: TYPE_RESULT.Empty,
              stt: idx + 1,
              ...ls
            }
          })
          console.log(this.listQuestion)
          this._data = this.listQuestion[0];
        }
      }
    })
  }

  handlerBtnPrevious(id: number) {
    if (id > 1) {
      this._data = this.listQuestion[id - 2];
    }
    this.setItemLocalStorage();
  }

  handlerBtnNext(id: number) {
    if (id < this.listQuestion.length) {
      this._data = this.listQuestion[id]
    }
    this.setItemLocalStorage()
  }

  handlerBtnSubmit() {
    this.setItemLocalStorage();
    this.pageHtmlServices.checkanwser().subscribe(
      {
        next: result => {
          this.isEndTest = true;
          const _allListAnswer = JSON.parse(localStorage.getItem("allListAnswer")!);
          result.forEach((for1: any) => {
            _allListAnswer.forEach((for2: any) => {
              if (for1.id === for2.id) {
                console.log(for1)
                console.log(for2)
                for1.answer.forEach((f1: any) => {
                  for2.answer.forEach((f2: any) => {
                    if (f1.id === f2.id) {
                      // this.listQuestion[for2.id].ds = TYPE_RESULT.True
                      console.log("true")

                      console.log(for1)
                    } else {
                      // this.listQuestion[for2.id].ds = TYPE_RESULT.False
                      console.log("false")
                      console.log(for1)
                    }
                  })
                })
              }
            })
          })
          // localStorage.clear()
        }
      }
    )
  }

  dataSendMany(event: any) {
    this.listAnswer = []
    this.listAnswer.push(event)
  }

  dataSendOnly(event: any) {
    this.listAnswer = []
    this.listAnswer.push(event)
  }

  setItemLocalStorage() {
    this.allListAnswer.push(...this.listAnswer)
    if (this.allListAnswer.length) {
      const _allListAnswer = JSON.parse(localStorage.getItem("allListAnswer")!);
      if (_allListAnswer) {
        _allListAnswer.push(...this.allListAnswer)
        localStorage.setItem("allListAnswer", JSON.stringify(_allListAnswer));
      } else {
        localStorage.setItem("allListAnswer", JSON.stringify(this.allListAnswer));
      }
    }
    this.allListAnswer = []
    this.listAnswer = []
  }

  navigateQuestion(idx: number) {
    this._data = this.listQuestion[idx - 1]
  }

  checkResult(result: string) {
    if (result === TYPE_RESULT.Empty) {
      return ' btn-secondary'
    }
    if (result === TYPE_RESULT.False) {
      return 'btn-danger'
    }
    if (result === TYPE_RESULT.True) {
      return 'btn-success'
    }
    return
  }

}
