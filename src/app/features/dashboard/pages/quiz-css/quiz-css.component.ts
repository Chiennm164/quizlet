import { Component, OnInit } from '@angular/core';
import {GROUP_ANSWER} from "../../../../core/constants";

@Component({
  selector: 'app-quiz-css',
  templateUrl: './quiz-css.component.html',
  styleUrls: ['./quiz-css.component.scss']
})
export class QuizCssComponent implements OnInit {
  group: GROUP_ANSWER = GROUP_ANSWER.Css

  constructor() { }

  ngOnInit(): void {
  }

}
