import {Component, OnInit} from '@angular/core';
import {GROUP_ANSWER} from "../../../../core/constants";

@Component({
  selector: 'app-quiz-html',
  templateUrl: './quiz-html.component.html',
  styleUrls: ['./quiz-html.component.scss']
})
export class QuizHtmlComponent implements OnInit {

  group: GROUP_ANSWER =GROUP_ANSWER.Html
  constructor() {
  }

  ngOnInit(): void {
  }
}
