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
  @Input() isEndTest: boolean = false;
  @Output() answerSelectedOnly = new EventEmitter<any>()
  @Output() answerSelectedMany = new EventEmitter<any>()

  _data: DataChecked[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    this._data = [...this.data.answer!.map((e: Answer) => {
      let isChecked = false
      this.data.answerSelected?.forEach((for2: any) => {
        if (for2.id === e.id) {
          isChecked = true
        }
      })
      return {data: e, checked: isChecked}
    })]
  }

  handlerSelectedAnswerOnly(ans: any) {
    this.answerSelectedOnly.emit({
      id: this.data.id,
      answer: [{id: ans}]
    })
  }

  handlerSelectedAnswerMany() {
    const dataSend = this._data.filter((res: DataChecked) => res.checked)
    this.answerSelectedMany.emit({
      id: this.data.id,
      answer: [...dataSend.map((e: DataChecked) => {
        return {
          id: e.data.id,
        }
      })]
    })

  }

}
