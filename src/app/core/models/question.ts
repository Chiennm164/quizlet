import {TYPE_ANSWER} from "../constants";

export interface Answer {
  id: number,
  _name: string
}

export interface answerSelected {
  id: number
}

export interface Question {
  id?: number,
  stt?: number,
  ds?: string,
  group?: string,
  type?: TYPE_ANSWER,
  title?: string,
  answer?: Answer[],
  answerSelected?: answerSelected[]
}
