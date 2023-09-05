import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHtmlComponent } from './quiz-html.component';

describe('QuizHtmlComponent', () => {
  let component: QuizHtmlComponent;
  let fixture: ComponentFixture<QuizHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
