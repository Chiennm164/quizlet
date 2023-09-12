import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Answer, Question} from "../../../../core/models/question";

interface DataChecked {
  checked: boolean,
  data: Answer
}

@Component({
  selector: 'mcn-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {

  @Input() data: Question = {}
  @Input() isEndTest: boolean = true;
  @Output() answerSelectedOnly = new EventEmitter<any>()
  @Output() answerSelectedMany = new EventEmitter<any>()

  _data: DataChecked[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this._data = [...this.data.answer!.map((e: Answer) => {
      return {data: e, checked: false}
    })]
    this.checkLocalStorage()
  }

  handlerSelectedAnswerOnly(data: any) {
    this.answerSelectedOnly.emit({
      id: this.data.id,
      answer: [data]
    })
  }

  handlerSelectedAnswerMany() {
    const dataSend = this._data.filter((res: DataChecked) => res.checked)
    if (dataSend.length > 0) {
      this.answerSelectedMany.emit({
        id: this.data.id,
        answer: [...dataSend.map((e: DataChecked) => {
          return {
            id: e.data.id,
            _name: e.data._name
          }
        })]
      })
    }
  }

  checkLocalStorage() {
    const _allListAnswer = JSON.parse(localStorage.getItem("allListAnswer")!)
    if (_allListAnswer) {
      const check = _allListAnswer.find((e: any) => {
        return e.id === this.data.id
      })
      if (check) {
        check.answer.forEach((ch: any) => {
          const selected = this._data.find((sel) => {
            return ch.id === sel.data.id
          })
          if (selected) {
            selected.checked = true
          }
        })
      }
    }
  }
}
